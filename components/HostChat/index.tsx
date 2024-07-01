import { cn } from "@lambo/lib/utils";
import { useChat } from "@livekit/components-react";
import { useCallback, useMemo, useState, type KeyboardEvent } from "react";
import { Input } from "@nextui-org/react";
import EmojiPicker from "emoji-picker-react";

import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
// import { Textarea } from "./ui/textarea";

import { ChatSectionStyled } from "./styled";

interface Props {
  participantName: string;
}

export default function Chat({ participantName }: Props) {
  // const [isClient, setIsClient] = useState(false);
  const [inputStr, setInputStr] = useState("");
  const [isEmojiPickerShowed, setIsEmojiPickerShowed] = useState(false);

  const { chatMessages: messages, send } = useChat();

  // useEffect(() => {
  //   setIsClient(true)
  // }, []);

  const onEmojiClick = (event: any, emojiObject: any) => {
    setInputStr((prevInput) => prevInput + event.emoji);
    setIsEmojiPickerShowed(false);
  };

  const reverseMessages = useMemo(
    () => messages.sort((a, b) => b.timestamp - a.timestamp),
    [messages],
  );

  const onEnter = useCallback(
    (e: any /*KeyboardEvent<HTMLTextAreaElement>*/) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        if (inputStr.trim().length > 0 && send) {
          send(inputStr).catch((err) => console.error(err));
          setInputStr("");
        }
      }
    },
    [inputStr, send],
  );

  const onSend = useCallback(() => {
    if (inputStr.trim().length > 0 && send) {
      send(inputStr).catch((err) => console.error(err));
      setInputStr("");
      setIsEmojiPickerShowed(false);
    }
  }, [send]);

  return (
    <>
      <div className="flex min-h-0 flex-1 flex-col-reverse overflow-y-auto">
        {reverseMessages.map((message) => (
          <div key={message.timestamp} className="flex items-center gap-2 p-2">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "text-xs font-semibold",
                    participantName === message.from?.identity &&
                      "text-indigo-500",
                  )}
                >
                  {message.from?.identity}
                  {participantName === message.from?.identity && " (you)"}
                </div>
                <div className="text-xs text-gray-500">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </div>
              </div>
              <div className="text-sm">{message.message}</div>
            </div>
          </div>
        ))}
      </div>
      <ChatSectionStyled className="flex w-full gap-2">
        {/* <img
          src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
          onClick={() => setShowPicker((val) => !val)}
        /> */}
        {isEmojiPickerShowed && <EmojiPicker onEmojiClick={onEmojiClick} />}
        <Input
          className="border-box h-10 bg-white dark:bg-zinc-900"
          placeholder="Type a message..."
          value={inputStr}
          onChange={(e) => {
            setInputStr(e.target.value);
          }}
          onKeyDown={onEnter}
        />
        <Button onClick={() => setIsEmojiPickerShowed(!isEmojiPickerShowed)}>
          Emoji
        </Button>
        <Button disabled={inputStr.trim().length === 0} onClick={onSend}>
          <div className="flex items-center gap-2">
            <Icons.send className="h-4 w-4" />
          </div>
        </Button>
      </ChatSectionStyled>
    </>
  );
}
