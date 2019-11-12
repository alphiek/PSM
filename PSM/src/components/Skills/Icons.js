import React from "react"
import styled from "styled-components"
import { colors } from "../Utils/colors"

export const Icons = ({ name }) => {
  switch (name) {
    case "fireplaces":
      return (
        <Icon>
          <svg x="0px" y="0px" viewBox="0 0 30 30">
            <g>
            <circle class="cls-1" cx="15" cy="15" r="15" fill={colors.slate}/>
  <path class="cls-2" fill={colors.tan} d="M23,21.32V9.78h.52V6.5H6.47V9.78H7V21.32H5.5V23.5h19V21.32ZM6.1,22.79V22H23.9v.77Zm1.48-1.47V9.85h3.08V21.32Zm6.22-4.09a5.39,
  5.39,0,0,0,.44,2.21.37.37,0,0,0,.56.2,5.06,5.06,0,0,0,.79-2.51,4.69,4.69,0,0,1,.52,1.39,1.7,1.7,0,0,1,0,.22v0a.33.33,0,0,0,.2.29.26.26,0,0,0,.31-.11,2.16,2.16,0,0,
  0,.4-.9,5.4,5.4,0,0,1,.41.89,2.68,2.68,0,0,1-.19,2.33h-3.7a1.78,1.78,0,0,1-.43-.67A4,4,0,0,1,13.8,17.23ZM18,18.66a7.17,7.17,0,0,0-1-1.83.27.27,0,0,0-.36-.08.38.38,
  0,0,0-.15.39,2.65,2.65,0,0,1,0,.55,7.2,7.2,0,0,0-1.06-1.91.27.27,0,0,0-.4-.06.39.39,0,0,0-.08.46,6.1,6.1,0,0,1-.36,2.58,6.82,6.82,0,0,1-.18-2.57.37.37,0,0,0-.18-.36.27.27,0,
  0,0-.35.08c-1.35,1.84-1.84,3.7-1.3,5a1.64,1.64,0,0,0,.21.45H11.26V9.78h7.48V21.32H18A3.59,3.59,0,0,0,18,18.66Zm1.31,2.66V9.85h3.08V21.32ZM22.93,7.21V9.08H7.07V7.21Z"/>

            </g>
          </svg>
        </Icon>
      )
    case "clay":
      return (
        <Icon>
          <svg x="0px" y="0px" viewBox="0 0 30 30">
            <g>
            <circle class="cls-1" cx="15" cy="15" r="15" fill={colors.slate}/>
  <path class="cls-2" fill={colors.tan} d="M13.23,10V7.18h3.54V10c0,1.52,2.14,2.56,2.15,2.56A7.91,7.91,0,0,1,22,15.28a8.55,8.55,0,0,1,1.28,4.13h-.93a7.49,7.49,0,0,0-1-3.38l-.21-.33a6.77,6.77,0,0,
  0-2.31-2.08c-.14-.09-.48-.25-.48-.25a7.77,7.77,0,0,0-2.88-.7h-.67a7.49,7.49,0,0,0-2.9.7l-.48.24A6.62,6.62,0,0,0,9,15.73s-.2.31-.2.31a7.63,7.63,0,0,0-1,3.37H6.74A8.66,8.66,
  0,0,1,8,15.28a7.72,7.72,0,0,1,3.07-2.76C11.31,12.41,13.22,11.43,13.23,10ZM24,19.6v-.09a9.32,9.32,0,0,0-1.42-4.63,8.4,8.4,0,0,0-3.34-3c-.7-.34-1.75-1.13-1.75-1.9V4.85h-5V10c0,.91-1.34,
  1.68-1.74,1.9a8.35,8.35,0,0,0-3.35,3A9.43,9.43,0,0,0,6,19.61v3.24H24Zm-11-4.35L12.27,14a7.14,7.14,0,0,1,2.44-.57v1.44A5.86,5.86,0,0,0,12.94,15.25Zm2.48-.41V13.4a6.81,6.81,0,0,1,
  2.44.57l-.66,1.28A5.72,5.72,0,0,0,15.42,14.84Zm3.09-.55A6,6,0,0,1,20.42,16l-1.19.83a5.05,5.05,0,0,0-1.39-1.25Zm-6.89,0,.67,1.29a5.05,5.05,0,0,0-1.39,1.25L9.71,16A6.15,6.15,0,0,1,
  11.62,14.29Zm-.42,3.38.09-.14A4.12,4.12,0,0,1,13,16.05l.13-.07a5,5,0,0,1,4,0l.15.08a4,4,0,0,1,1.64,1.48,4.28,4.28,0,0,1,.66,1.87H10.63A4.64,4.64,0,0,1,11.2,17.67Zm-.69-.24a5.57,
  5.57,0,0,0-.59,2H8.51a6.82,6.82,0,0,1,.82-2.8Zm10.3-.82a6.72,6.72,0,0,1,.81,2.8h-1.4a5.66,5.66,0,0,0-.6-2ZM13.24,6.45V5.59h3.53v.86ZM6.73,20.77v-.62H23.28v.62Zm0,1.35V21.5H23.28v.62Z"/>
          </g>
          </svg>
        </Icon>
      )
    case "garden":
      return (
        <Icon>
          <svg x="0px" y="0px" viewBox="0 0 30 30">
  <circle class="cls-1" cx="15" cy="15" r="15" fill={colors.slate}/>
  <g fill={colors.tan}>
    <path class="cls-2" d="M12.91,10.61H6V7h6.9Zm-6.4-.52h5.91V7.52H6.51Z"/>
    <path class="cls-2" d="M20.31,10.61h-6.9V7h6.9Zm-6.41-.52h5.91V7.52H13.9Z"/>
    <path class="cls-2" d="M9.21,14.74H6V11.13H9.21Zm-2.72-.52H8.72V11.65H6.49Z"/>
    <path class="cls-2" d="M24,10.61H20.79V7H24Zm-2.72-.52h2.23V7.52H21.28Z"/>
    <path class="cls-2" d="M16.61,14.74H9.71V11.13h6.9Zm-6.41-.52h5.91V11.65H10.2Z"/>
    <path class="cls-2" d="M24,14.74H17.1V11.13H24Zm-6.41-.52h5.92V11.65H17.59Z"/>
    <path class="cls-2" d="M9.21,23H6V19.39H9.21Zm-2.72-.52H8.72V19.91H6.49Z"/>
    <path class="cls-2" d="M24,18.87H20.79V15.26H24Zm-2.72-.52h2.23V15.78H21.28Z"/>
    <path class="cls-2" d="M12.91,18.87H6V15.26h6.9Zm-6.4-.52h5.91V15.78H6.51Z"/>
    <path class="cls-2" d="M20.31,18.87h-6.9V15.26h6.9Zm-6.41-.52h5.91V15.78H13.9Z"/>
    <path class="cls-2" d="M16.61,23H9.71V19.39h6.9Zm-6.41-.52h5.91V19.91H10.2Z"/>
    <path class="cls-2" d="M24,23H17.1V19.39H24Zm-6.41-.52h5.92V19.91H17.59Z"/>
  </g>
        </svg>
        </Icon>
      )
    case "porches":
      return (
        <Icon>
          <svg x="0px" y="0px" viewBox="0 0 30 30" >
          <circle class="cls-1" cx="15" cy="15" r="15" fill={colors.slate}/>
  <path class="cls-2" fill={colors.tan} d="M23.32,12.61l0-.5h0a7.71,7.71,0,0,0-1.63-4.45l-.33-.39a8.15,8.15,0,0,0-3.67-2.21l-.49-.13a9.87,
  9.87,0,0,0-4.36,0l-.48.12A8.17,8.17,0,0,0,8.66,7.28l-.32.38A7.72,7.72,0,0,0,6.7,12.11l0,.5V23.33h3.54V12.38a4.24,4.24,
  0,0,1,1-2.71,4.49,4.49,0,0,1,2.34-1.41,5.61,5.61,0,0,1,2.82,0,4.55,4.55,0,0,1,2.35,1.41,4.29,4.29,0,0,1,1,
  2.71V23.33h3.54ZM7.34,12A7,7,0,0,1,8.78,8.11L10.54,9.5A5.08,5.08,0,0,0,9.6,12Zm0,3.54V12.69H9.57v2.89Zm0,
  3.55v-2.9H9.57v2.9Zm0,3.54V19.78H9.57v2.89Zm5.77-15A5.24,5.24,0,0,0,11,9L9.21,7.62a7.45,7.45,0,0,1,
  3.25-1.93Zm7.69-.1L19,9A5.28,5.28,0,0,0,16.9,7.72l.65-2A7.47,7.47,0,0,1,20.79,7.62ZM16.92,5.53l-.65,2a6.39,6.39,0,
  0,0-2.54,0l-.64-2A9.16,9.16,0,0,1,16.92,5.53ZM20.41,12a5.09,5.09,0,0,0-.95-2.54l1.76-1.39A6.94,6.94,0,0,1,22.66,
  12Zm2.26,4.19v2.9H20.43v-2.9Zm0,3.55v2.89H20.43V19.78Zm-2.24-4.2V12.69h2.24v2.89Z"/>
          </svg>
        </Icon>
      )
    case "bars":
      return (
        <Icon>
          <svg x="0px" y="0px" viewBox="0 0 30 30" >
          <circle class="cls-1" cx="15" cy="15" r="15" fill={colors.slate}/>
          <g fill={colors.tan}>
  <path class="cls-2" d="M7.46,6.76H9V10.3l-.9.89a.36.36,0,0,0-.12.27.42.42,0,0,0,.12.26,8.41,8.41,0,0,0,2.65,0,.33.33,0,0,0,.11-.27.36.36,0,0,0-.12-.26l-1-.89V6.76h4.82V10.3l-.91.89a.39.39,0,0,0,0,.53,8.47,8.47,0,0,0,2.66,0,.33.33,0,0,0,.11-.27.33.33,0,0,0-.13-.26l-1-.89V6.76h4.81V10.3l-.9.89a.38.38,0,0,0,0,.53,14.8,14.8,0,0,0,2.38.11.38.38,0,0,0,.28-.12.37.37,0,0,0,.11-.27.38.38,0,0,0-.13-.26l-1-.9V6.76h1a.38.38,0,1,0,0-.76H7.46a.38.38,0,0,0,0,.76Z"/>
  <path class="cls-2" d="M23.62,14.76H6.38a.38.38,0,0,0-.38.38.37.37,0,0,0,.38.37h.31v7.75H9.11L9,23.51a.42.42,0,0,0,0,.29.37.37,0,0,0,.24.18l.11,0a.37.37,0,0,0,.35-.26l.16-.48h3l.15.48a.36.36,0,0,0,.19.21.37.37,0,0,0,.29,0,.36.36,0,0,0,.23-.19.44.44,0,0,0,0-.28l-.08-.25h2.91l-.08.25a.42.42,0,0,0,0,.29.38.38,0,0,0,.23.18l.11,0a.38.38,0,0,0,.36-.26l.16-.48h3l.16.48a.36.36,0,0,0,.19.21.37.37,0,0,0,.29,0,.38.38,0,0,0,.25-.47l-.08-.25h2.07V15.51h.31a.37.37,0,0,0,.38-.37A.38.38,0,0,0,23.62,14.76Zm-4.85,4.3h.32l1.11,3.45H17.67Zm-7.52,0h.32l1.11,3.45H10.15Zm9.32-1.56v.81H17.29v-.81Zm.2,1.56a.56.56,0,0,0,.56-.56V17.3a.56.56,0,0,0-.56-.56H17.1a.57.57,0,0,0-.57.56v1.2a.57.57,0,0,0,.57.56H18l-1.1,3.45h-3.4l-1.1-3.45h.88a.57.57,0,0,0,.57-.56V17.3a.57.57,0,0,0-.57-.56H9.58A.57.57,0,0,0,9,17.3v1.2a.57.57,0,0,0,.57.56h.87l-1.1,3.45H7.45v-7h15.1v7H21l-1.11-3.45ZM13.05,17.5v.81H9.78v-.81Z"/>
        </g>
          </svg>
        </Icon>
      )
    case "extensions":
      return (
        <Icon>
          <svg x="0px" y="0px" viewBox="0 0 30 30" >
          <circle class="cls-1" cx="15" cy="15" r="15"fill={colors.slate}/>
  <g fill={colors.tan}>
    <rect class="cls-2" x="18.16" y="6.08" width="1.55" height="0.77"/>
    <rect class="cls-2" x="21.21" y="6.89" width="0.77" height="1.55" transform="translate(1.82 19.25) rotate(-49.9)"/>
    <rect class="cls-2" x="20.43" y="22.08" width="1.55" height="0.77"/>
    <rect class="cls-2" x="15.07" y="6.08" width="1.55" height="0.77"/>
    <rect class="cls-2" x="25.63" y="17.22" width="0.77" height="1.55"/>
    <rect class="cls-2" x="25.63" y="14.12" width="0.77" height="1.55"/>
    <rect class="cls-2" x="23.58" y="8.89" width="0.77" height="1.55" transform="translate(1.14 21.78) rotate(-49.91)"/>
    <polygon class="cls-2" points="25.99 10.86 25.49 11.45 25.64 11.57 25.64 12.57 26.41 12.57 26.41 11.21 25.99 10.86"/>
    <rect class="cls-2" x="25.63" y="20.32" width="0.77" height="1.55"/>
    <rect class="cls-2" x="23.52" y="22.08" width="1.55" height="0.77"/>
    <path class="cls-2" d="M18.59,13l.5-.59L12.47,6.85h1V6.08H12v.35L11.41,6,5.18,11.21h0L3.73,12.43l.5.59.95-.8V22.85h13.7v-.77H17.64V12.22Zm-1.72-1.45V22.08H12.74V17.24H10.08v4.84H6V11.57L11.41,7Z"/>
    <rect class="cls-2" x="13.84" y="13.56" width="1.71" height="2.56"/>
    <rect class="cls-2" x="7.26" y="13.56" width="1.72" height="2.56"/>
  </g>
            </svg>
        </Icon>
      )
    case "patio":
      return (
        <Icon>
          <svg x="0px" y="0px" viewBox="0 0 30 30" >
            <g>
            <circle class="cls-1" cx="15" cy="15" r="15" fill={colors.slate}/>
  <path class="cls-2" fill={colors.tan} d="M20.38,5.12l0-.1L10.47,5,6,23l18,0Zm2.83,17.06H19.38l-.22-2.85h3.48ZM15.33,17h3.06l.39,
  5.17H15.16Zm3-8.91h2.05l2.11,10.43H19.1Zm-.17-2.26h1.77l.29,1.45H18.25ZM15.36,16.18l.33-10.35h1.85l.79,
  10.35Zm-2.57-7.5.43-2.86h1.87L15,8.69ZM9,13.42l1.9-7.6h1.7l-1.15,7.61ZM15,9.5l-.41,12.67H10.76L12.67,
  9.5Zm-3.64,4.74-1.19,7.92H6.84l2-7.91Z"/>
            </g>
          </svg>
        </Icon>
      )
    case "stairs":
      return (
        <Icon>
          <svg x="0px" y="0px" viewBox="0 0 30 30" >
          <circle class="cls-1" cx="15" cy="15" r="15" fill={colors.slate}/>
  <path class="cls-2"fill={colors.tan} d="M20.56,10.39V5.54h2.17V5H15.32a2.05,2.05,0,0,0-1.48.56l-8.1,7.35A1.94,1.94,0,0,0,5,14.39V15h.55v-.63a1.36,
  1.36,0,0,1,.55-1l1-.92v7H5.27V20h.37V23H23V10.39Zm-3-4.85H20v4.85H17.59Zm-3.32.37a1.61,1.61,0,0,1,1.05-.36H17v4.85H15.31v.54h.22v2.49H14.27Zm-3.33,
  3c1.14-1,2.2-2,2.79-2.54v7H12.08V14h.25v2.47H10.94Zm-3.28,3,2.73-2.48v7H8.7V17h.21v2.44H7.66Zm14.8,10.53H6.18V20H9.12a.34.34,0,0,
  0,.34-.34V17h3.07a.35.35,0,0,0,.35-.34V14h2.86a.34.34,0,0,0,.34-.34V10.94h6.38Z"/>
          </svg>
        </Icon>
      )
    case "repairs":
      return (
        <Icon>
          <svg x="0px" y="0px" viewBox="0 0 30 30" >
          <circle class="cls-1" cx="15" cy="15" r="15" fill={colors.slate}/>
  <g fill={colors.tan}>
    <path class="cls-2" d="M23.86,7.67c-.23-.3-.35-.18-.35-.18l-.26.24.47.64L24,8.12S24.08,8,23.86,7.67Z"/>
    <polygon class="cls-2" points="22.99 7.71 22.99 7.71 20.13 10.39 20.13 10.39 20.13 10.39 20.84 11.36 23.7 8.68 22.99 7.71 22.99 7.71"/>
    <path class="cls-2" d="M19.89,11.27l.07.1c.22.3.37.21.37.21l.26-.24-.47-.63-.26.24S19.76,11,19.89,11.27Z"/>
    <path class="cls-2" d="M12.63,7.48H6v3.45h6.63Zm-.51,2.87H6.51V8.06h5.61Z"/>
    <path class="cls-2" d="M9,15.11V11.66H6v3.45ZM6.52,12.24h2v2.29h-2Z"/>
    <path class="cls-2" d="M12.63,15.84H6v3.45h6.63Zm-.51,2.87H6.51V16.42h5.61Z"/>
    <path class="cls-2" d="M16.93,23.47h6.63V20H16.93Zm.51-2.87h5.61v2.29H17.44Z"/>
    <path class="cls-2" d="M9.65,23.47h6.63V20H9.65Zm.51-2.87h5.61v2.29H10.16Z"/>
    <path class="cls-2" d="M6,23.47H9V20H6Zm.51-2.87h2v2.29h-2Z"/>
    <path class="cls-2" d="M9.65,11.66v3.45h4.79l-.62.73h-.54v3.45h6.63V15.92a1.91,1.91,0,0,0,.62-1.28A2.77,2.77,0,0,0,20.16,13a2.33,2.33,0,0,0-.57-.62A2.21,2.21,0,0,0,18.35,12a2.28,2.28,0,0,0-.45,0,2.91,2.91,0,0,0-1.62.92v-1.3Zm.51.58h5.61v1.22h0l-.89,1.06H10.16Zm9.24,4.18v2.29H13.79v-1a.67.67,0,0,0,.31.07h0a.69.69,0,0,0,.2,0l1.82-.49,2.62-.7a2.28,2.28,0,0,0,.35-.11ZM18,12.59l.38,0a1.79,1.79,0,0,1,1.08.34,1.62,1.62,0,0,1,.32.4A2.06,2.06,0,0,1,20,14.59a1.51,1.51,0,0,1-1,1.25h0a1.35,1.35,0,0,1-.24.08l-4.57,1.24h-.08a.37.37,0,0,1-.29-.52.21.21,0,0,1,0-.06c.78-.93,1.94-2.31,2.18-2.57A3.41,3.41,0,0,1,18,12.59Z"/>
    <path class="cls-2" d="M19.25,13.67a.16.16,0,0,1-.13-.06.21.21,0,0,1,0-.27l.76-.73a.13.13,0,0,0,0-.07.26.26,0,0,0-.07-.12,2.93,2.93,0,0,1-.38-.43.35.35,0,0,1-.06-.2.34.34,0,0,1,.12-.26l.13-.12a.15.15,0,0,1,.23,0,.21.21,0,0,1,0,.27l-.1.09a2.56,2.56,0,0,0,.3.34.55.55,0,0,1,.18.43.52.52,0,0,1-.17.34l-.74.72A.17.17,0,0,1,19.25,13.67Zm.49-1.93v0Z"/>
  </g>
          </svg>
        </Icon>
      )
    default:
  }
}

const Icon = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  margin: 1rem auto;
`
