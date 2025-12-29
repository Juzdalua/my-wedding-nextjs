import { Metadata } from "next";
import RoomMap from "./components/room-map";
import Streaming from "./components/streaming";
import ChatBox from "./components/chat-box";
import ChatInput from "./components/chat-input";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Room", 
  };
}

const Room = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col">
        <Streaming />
        <ChatBox />
      </div>
      <RoomMap />
      <ChatInput />
    </div>
  );
};

export default Room;
