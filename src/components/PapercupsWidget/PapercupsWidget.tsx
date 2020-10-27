import {ChatWidget} from "@papercups-io/chat-widget";

export default function PapercupsWidget(): JSX.Element {
  return (
    <ChatWidget
      accountId={process.env.NEXT_PUBLIC_PAPERCUPS_ID as string}
      title="Welcome to Sentrei"
      subtitle="Ask us anything in the chat window below 😊"
      newMessagePlaceholder="Start typing ..."
      primaryColor="#EC4899"
      greeting="Hi there! How can we help you?"
    />
  );
}
