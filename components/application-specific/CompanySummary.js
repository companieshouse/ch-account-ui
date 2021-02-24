import PropTypes from 'prop-types'
import HeadingText from '../general-ui/typeography/HeadingText'
import React from 'react'
import Column from '../general-ui/layout/Column'
import Row from '../general-ui/layout/Row'
import BodyText from '../general-ui/typeography/BodyText'
import SpanText from '../general-ui/typeography/SpanText'
import Table from '../general-ui/layout/Table'
import THead from '../general-ui/layout/THead'
import Tr from '../general-ui/layout/Tr'
import Th from '../general-ui/layout/Th'
import TBody from '../general-ui/layout/TBody'
import Td from '../general-ui/layout/Td'
import Tag from '../general-ui/typeography/Tag'
import Button from '../general-ui/interaction/Button'
import HeadingCount from '../../services/HeadingCount'

const CompanySummary = ({
  headingCount,
  company = {}
}) => {
  const { name, number, address, personsAuthorisedToFile } = company

  return (
    <div className="companySummary govuk-!-padding-2">
      <HeadingText headingCount={headingCount} size="m">{name}</HeadingText>
      <Row>
        <Column width="two-thirds">
          <BodyText>
            Company number<br/>
            <SpanText weight="bold">{number}</SpanText>
          </BodyText>

          <BodyText>
            Correspondence address<br/>
            <SpanText weight="bold">{address}</SpanText>
          </BodyText>
          <Table caption="People authorised to file for this company">
            <THead>
              <Tr>
                <Th scope="col">Authorised people</Th>
                <Th scope="col">Status</Th>
              </Tr>
            </THead>
            <TBody>
              {personsAuthorisedToFile.map((person) => <Tr key={person.emailAddress}>
                <Td>{person.name}</Td>
                <Td><Tag colour="blue">{person.status}</Tag></Td>
              </Tr>)}
            </TBody>
          </Table>
        </Column>
        <Column width="one-third">
          <Button renderAs="link" href={`/account/company/${number}/file`} testId={`fileForCompanyButton_${number}`}>File for this company</Button>
          <Button renderAs="link" href={`/account/company/${number}/add-authorised-person`} testId={`addAuthorisedPersonButton_${number}`}>Add an authorised person</Button>
        </Column>
      </Row>
    </div>
  )
}

export default CompanySummary

CompanySummary.propTypes = {
  company: PropTypes.object,
  headingCount: PropTypes.instanceOf(HeadingCount)
}

CompanySummary.defaultProps = {
  company: {}
}
