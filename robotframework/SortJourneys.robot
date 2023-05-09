*** Settings ***
Library             SeleniumLibrary

Suite Setup         Set Selenium Speed    ${SPEED}
Test Setup          Open Browser    ${URL}    chrome
Test Teardown       Close Browser

*** Variables ***
${URL}                  http://localhost:8081
${SPEED}                1
${JOURNEY_TO_FIND}      Velodrominrinne
${SHORTEST_DISTANCE}    0.01 km

*** Test Cases ***
Sort Journeys
    Wait Until Element Contains    class:tablerows    A.I. Virtasen aukio  timeout=30
    SortByReturnStation
    SortByShortestDistance

*** Keywords ***
SortByReturnStation
    TRY
        Click Element                  id:radio2
        Wait Until Element Contains    class:tablerows    ${JOURNEY_TO_FIND}  timeout=30
    EXCEPT    Element 'class:tablerows' did not get text ${JOURNEY_TO_FIND} in 30 seconds.
        Log To Console                 Didn't find the right station
    END

SortByShortestDistance
    TRY
        Click Element                  id:radio4
        Wait Until Element Contains    class:tablerows    ${SHORTEST_DISTANCE}  timeout=30
    EXCEPT    Element 'class:tablerows' did not get text ${SHORTEST_DISTANCE} in 30 seconds.
        Log To Console                 Didn't find the right station
    END
