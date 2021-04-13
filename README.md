This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

# Dynamic Page / Features System
> Components and features are the same thing as far as react is
concerned. We use the terms interchangeably here, but the only 
difference is that a feature is a component that can be dynamically
rendered by a JSON definition instead of explicitly on a react page.

The application uses data from the server-side to determine what elements
are displayed on particular pages and builds forms dynamically. We
also use the `features.json` data to add to a dynamically generated
page with more info than just the form elements the server asked for.

For instance, for the `login` page, the server might ask us to render
a username and password field but no other information is present.
On our `login` screen we also need a page title, some descriptive
text and a bit of hint text applied to the `username` field. None
of that data exists in the data coming back from the server so we
need some way of describing those extra elements based on the page
we are rendering. Given that the server pages can be changed and
updated, we wanted a way to respond to those changes without having
to create a new corresponding react page or modifying an existing one
when changes happen server-side. This is why the dynamic page /
features system exists.

## Journeys and Stages
On the server-side, there are page flows called journeys. Each journey
consists of stages and each stage maps to a page on the front end
and an entry in the `features.json` that we use to describe what 
extra components such as text headings and body text should
be rendered around the server-sent form elements.

Let's use the password reset journey as an example. When the user navigates
to the `/password-reset/request/` url, the react page asks the server-side
to initiate the `CHResetPassword` journey. This request responds with some
JSON that includes what form fields we need to present to the user as well
as the name of the `stage` we are on.

The stage name that is returned maps directly to a key in the
`/services/lang/en/features.json` (or the `cy` language version). If we
take a look at the `RESET_PASSWORD_1` data in that file, it will
look something like this:

```json
{
  ...
  "RESET_PASSWORD_1": [
    {
      "component": "PageHeading",
      "props": {
        "children": "Enter your email address"
      }
    },
    {
      "component": "BodyText",
      "props": {
        "children": "Enter the email address you used to create your Companies House account. We'll send you a link so you can reset your password."
      }
    },
    {
      "component": "DisplayUiElements",
      "props": {
        "elementProps": {
          "IDToken1": {
            "type": "email",
            "autoComplete": "email"
          }
        }
      }
    },
    {
      "component": "Button",
      "props": {
        "children": "Send Link",
        "type": "submit",
        "testId": "submitButton"
      }
    }
  ],
  ...
}
```

When the page gets rendered, the app takes this data and renders
the corresponding component. You can see that we can pass `props`
and `children` to the component. These get spread into the
component's props and what you provide here will override a prop
if it clashes with one that is already being passed to the
component.

## DisplayUiElements
The `DisplayUiElements` specifically handles taking the JSON that
the server sent and renders the required form elements. If you do
not include this feature in your stage data in `features.json` then
no form elements the server sends will be rendered (including
hidden ones).

You'll notice in the `DisplayUiElements` component we can also pass
a prop called `elementProps`. This allows you to pass props to the
specific form component that the server has told us to render. The
props here are targeted by the ID of the field.

```json
{
  "component": "DisplayUiElements",
  "props": {
    "elementProps": {
      "IDToken1": {
        "type": "email",
        "autoComplete": "email"
      }
    }
  }
}
```

In the example above, we are saying that "when rendering the field
with the ID `IDToken1` set the `type` and `autocomplete` props to 
`email`". If we open the `/components/general-ui/interaction/InputField.js`
component, we can see that those props get used when rendering the
`<input>` field.

## Applying a testId
You'll notice that the example shows how you can set a `testId`
for a particular feature. The `testId` prop should be accepted by
all interactive features so that end-to-end testing can target
those fields.

Server-rendered fields are passed a `testId` based on the server
data and so do not need a manual one to be specified in the 
`features.json` although you can override if you like.

For instance, if you wanted to override the `testId` on the server
sent form field `IDToken1` you could add:

```json
{
  "component": "DisplayUiElements",
  "props": {
    "elementProps": {
      "IDToken1": {
        "type": "email",
        "autoComplete": "email",
        "testId": "myNewTestId" <------ THIS
      }
    }
  }
}
```

## New Pages
While the dynamic system works for existing journeys that we know about, it does
not support creating entirely new journeys that map to new front-end urls. If you
need to do that, you will need to create a corresponding page in the `/pages`
folder.
