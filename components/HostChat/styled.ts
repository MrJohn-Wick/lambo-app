import styled from "styled-components";
import { Image } from "@nextui-org/react";
import EmojiPicker from "emoji-picker-react";

export const ChatSectionStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const EmojiButtonStyled = styled(Image)`
  position: absolute;
`;

export const EmojiPickerStyled = styled(EmojiPicker)`
  position: absolute;
`;
