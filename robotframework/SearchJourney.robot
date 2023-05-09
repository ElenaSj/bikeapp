*** Settings ***
Library             SeleniumLibrary

Suite Setup         Set Selenium Speed    ${SPEED}
Test Setup          Open Browser    ${URL}    chrome
Test Teardown       Close Browser

*** Variables ***
${URL}              http://localhost:8081
${SPEED}            1
${SEARCHWORD}       saari
${JOURNEY_TO_FIND}  Verkkosaari

*** Test Cases ***
Search For Journey
    SearchForJourney

*** Keywords ***
SearchForJourney
    TRY
        Wait Until Element Contains    class:tablerows    A.I. Virtasen aukio  timeout=30
        Input Text                     class:form-control    ${SEARCHWORD} 
        Click Element                  id:button-addon1
        Wait Until Element Contains    class:tablerows    ${JOURNEY_TO_FIND}  timeout=30
    EXCEPT    Element 'class:tablerows' did not get text ${JOURNEY_TO_FIND} in 30 seconds.
        Log To Console                 Didn't find the right station
    END
