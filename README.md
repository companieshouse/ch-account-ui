This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Contents

1. [Getting Started](#getting-started)
2. [Dynamic Page & Features System](#dynamic-page-features-system)
3. [Development workflow](#development-workflow)

## Getting Started

First, install the dependencies.

```
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

Open [http://localhost:3001](http://localhost:3001) to browse components and pages in Storybook.

# Next.js

The application is based on Next.js. Next handles all the bundling etc as well as routing. It uses a mixture of SSR and
CSR and builds to a [static site](https://nextjs.org/docs/advanced-features/static-html-export) for deployment to and S3
bucket. For more info on Next.js see [nextjs.org](https://nextjs.org/)

# Dynamic Page & Features System

> Components and features are the same thing as far as react is concerned. We use the terms interchangeably here, but the only difference is that a feature is a component that can be dynamically rendered by a JSON definition instead of explicitly on a React page.

The application uses data from the server-side to determine what elements are displayed on particular pages and builds
forms dynamically.

For instance, for the `login` page, the server might ask us to render a username and password field but no other
information is present. On our `login` screen we also need a page title, some descriptive text and a bit of hint text
applied to the `username` field. None of that data exists in the data coming back from the server, so we need some way
of describing those extra elements based on the page we are rendering as well. Given that the server pages can be
changed and updated, we wanted a way to respond to those changes without having to create a new corresponding React page
or modifying an existing one when changes happen server-side. This is why we have a dynamic page / features system.

### Journeys and Stages

On the server-side (FIDC), there are page flows called journeys. Each journey consists of stages and each stage maps to
a page on the front end and a stage definition in the `/services/stages` folder that describes extra components such as
text headings and body text that should be rendered around the server-sent form elements.

Let's use the password reset journey as an example. When the user navigates to the `/password-reset/request/` url, the
React page asks the server-side to initiate the `CHResetPassword` journey. This request responds with some data that
includes what form fields we need to present to the user as well as the name of the `stage` we are on.

The stage name that is returned maps directly to a file in the
`/services/stages` folder. If we take a look at the `RESET_PASSWORD_1.js` file, it will look something like this:

```js
const RESET_PASSWORD_1 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('RESET_PASSWORD_1.[1].PageHeading.enterYourEmailAddress')
    }
  },
  {
    conditional: {
      prop: '${notifyToken}',
      operator: 'eeq',
      value: 'forceUpdate'
    },
    component: 'NotificationBanner',
    dynamicProps: {
      title: tokens('SHARED.important'),
      heading: tokens('RESET_PASSWORD_1.[0].NotificationBanner.yourPasswordNeedsToBeUpdatedPleaseFollowThe')
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('RESET_PASSWORD_1.[1].PageHeading.enterYourEmailAddress')
    }
  },
  {
    component: 'BodyText',
    props: {
      children: tokens('RESET_PASSWORD_1.[2].BodyText.enterTheEmailAddressYouUsedToCreateYour')
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken1: {
          label: tokens('SHARED.emailAddress'),
          type: 'email',
          autoComplete: 'email'
        }
      }
    }
  },
  {
    component: 'Button',
    props: {
      children: tokens('SHARED.continue'),
      type: 'submit',
      testId: 'submitButton'
    }
  }
]
export default RESET_PASSWORD_1
```

When the page gets rendered, the app takes this data and renders the corresponding component. You can see that we can
pass `props`
and `children` to the component. These get spread into the component's props and what you provide here will override a
prop if it clashes with one that is already being passed to the component.

### DisplayUiElements

The `DisplayUiElements` specifically handles taking the JSON that the server sent and renders the required form
elements. If you do not include this feature in your stage definition then no form elements the server sends will be
rendered (including hidden ones).

You'll notice in the `DisplayUiElements` component we can also pass a prop called `elementProps`. This allows you to
pass props to the specific form component that the server has told us to render. The props here are targeted by the ID
of the field.

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

In the example above, we are saying that "when rendering the field with the ID `IDToken1` set the `type`
and `autoComplete` props to
`email`". If we open the `/components/general-ui/interaction/InputField.js`
component, we can see that those props get used when rendering the
`<input>` field.

### Conditionals & Iteration

There are also specific props for iterating and conditional rendering other components.

``` js
conditional: {
  prop: '${notifyToken}',
  operator: 'eeq',
  value: 'associateSuccess'
},
```

``` js
iterator: {
  prop: '${companies}',
  name: 'company',
  index: 'index'
},
``` 

### Dynamic props

Where properties within the stage definition need to be dynamic they are included as a template string and those props
specifically declared as dynamic.

``` js
dynamicProps: {
  href: '${member.detailsPath}'
},
```

## Development workflow

The CORS configuration in the FIDC dev instance allows development locally against that environment. The UI environment
properties are configured by default this way. Once the app is up and running then you should be able to navigate
through the journeys using `localhost:3000` Alternatively Storybook on `localhost:3001` allows isolated local
development by mocking the data returned from FIDC.

- #### Creating a new next js page (route)
  Each UI journey maps to a Next.js page which is the route for that journey `pages/account/home.js`. The page file
  contains all the code needed to initiate that journey or page. The page interfaces with the Forgerock SDK and FIDC
  using one of two custom hooks.
    - `useFRFlow` (for journeys )
    - `useFRAuth` (for standalone pages)

  The page consists of two key components ```<FeatureDynamicView/>``` and ```<Dynamic/>``` you can see how these are
  used in the existing page examples. FeatureDynamicView is effectively the page wrapper, handling the header footer and
  navigation. Dynamic is the main component which translates the stage definition into the rendered React components.

  Any code specific to the journey can be applied in these page files for example setting dynamic links as props to be
  passed down the component tree and exposed to the page components.

- #### Capturing the response data from FIDC
  Once the page has been configured you will be able to see the response data coming back from FIDC. Once you know the
  stage name and other data being returned you can start to create the stage definition file. You can also capture that
  data and create a new story for the page with mock response data in Storybook (see existing examples) which will allow
  you to work on a stage in isolation.

- #### React components
  Components are held within the ```components``` folder and are split into logical catagories. Components which are to
  be used directly in the stage definitions need to be added to the componentMap ```services/componentMap.js```. These
  components will receive any props passed in the stage definition or any props passed into the ```<Dynamic/>```
  component at the page level (the React dev tools are useful here for inspecting props)

- #### GDS and Component Styles
  The application relies heavily on the GDS govuk-frontend library for styling so application specific styling is
  minimal and can be found in ```css/global.scss```. Most of the presentational components are based on
  the [GDS markup examples](https://design-system.service.gov.uk/components/). The govuk-frontend js dependencies are
  loaded in ```_app.js```.
  

  
