import styled from 'styled-components'
import { prop } from 'styled-tools'

export const Container = styled.div`
  .react-calendar {
    border: 0;
    border-radius: 7px;
    ${props => props.theme.shadow.card};
    button {
      position: relative;
    }
    .react-calendar__navigation__label{
      height: 30px;
    }
    .react-calendar__tile{
      background: #ffffff;
      height: 40px;
      font-size: 16px;
    }
    .react-calendar__navigation{
      height: 44px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
      display: flex;
      align-items: center;
      justify-content: center;
      button{
        background: #ffffff;
        font-size: 30px;
      }
      &__label{        
        font-size: 18px!important;
      }
    }
    .react-calendar__tile:enabled:focus, .react-calendar__tile:enabled:hover {
      background-color: rgb(230, 230, 230);
    }
    .react-calendar__month-view__days__day--weekend{
      color: #D10000;
    }
    .react-calendar__month-view__days__day--neighboringMonth{
      color: #757575;
    }

    .react-calendar__navigation__arrow,
    .react-calendar__navigation__arrow{
      margin:10px;
    }
    button.react-calendar__tile--active:enabled:focus,
    button.react-calendar__tile--active:enabled:hover
    .react-calendar__tile--active,
    .react-calendar__tile--active {
      background: ${prop('theme.colors.main')};
      color: ${prop('theme.colors.mainAccentText')};
      &:focus, &:enabled:hover {        
        background: ${prop('theme.colors.main')};
        font-size: 18px;        
        transition: all ease-out .2s;
      }
    }
    .react-calendar__month-view__weekdays__weekday{      
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      abbr[title] {
        text-transform: lowercase;
        &:first-letter{
          text-transform: uppercase;
        }
        text-decoration: none;  
      }
    }
    .highlighted {
      position: relative;
      &::after {
        content: '';
        background: ${prop('theme.colors.main')};;
        position: absolute;
        top: 20%;
        height: 7px;
        width: 7px;
        right: 4px;
      }
    }
  }
`
