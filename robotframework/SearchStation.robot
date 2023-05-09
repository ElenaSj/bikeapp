*** Settings ***
Library             SeleniumLibrary

Suite Setup         Set Selenium Speed    ${SPEED}
Test Setup          Open Browser    ${URL}    chrome
Test Teardown       Close Browser

*** Variables ***
${URL}              http://localhost:8081
${SPEED}            1
${SEARCHWORD}       aukio
${STATION_TO_FIND}  Suurpellonaukio

*** Test Cases ***
Navigate To Stations And Search
    GoToStations
    SearchForStation

*** Keywords ***
GoToStations
    TRY
        Click Element          link:Bike Stations
        Page Should Contain    Search for stations
    EXCEPT    Page should have contained text 'Search for stations'.
        Log To Console         Navigating to station list view failed
    END

SearchForStation
    TRY
        Input Text                     class:form-control    ${SEARCHWORD} 
        Click Element                  id:button-addon1
        Wait Until Element Contains    class:list-group    ${STATION_TO_FIND}
    EXCEPT    Page should have contained text ${STATION_TO_FIND}.
        Log To Console                 Didn't find the right station
    END