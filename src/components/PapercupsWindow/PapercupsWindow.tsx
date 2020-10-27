import {ChatWindow} from "@papercups-io/chat-widget";

export interface Props {
  isSales?: boolean;
}

export default function PapercupsWindow({isSales = false}: Props): JSX.Element {
  return (
    <div className="m-4 shadow-lg h-80v sm:m-5 md:m-8 lg:m-10 xl:m-12">
      <ChatWindow
        accountId={process.env.NEXT_PUBLIC_PAPERCUPS_ID ?? ""}
        title={`Welcome to Sentrei ${isSales ? "Sales" : "Support"}`}
        subtitle="Ask us anything in the chat window below 😊"
        newMessagePlaceholder="Start typing ..."
        primaryColor="##EC4899"
        greeting="Hi there! How can we help you?"
        requireEmailUpfront={isSales}
      />
    </div>
  );
}
