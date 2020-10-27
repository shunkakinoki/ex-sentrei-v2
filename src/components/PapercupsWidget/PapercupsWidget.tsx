import {ChatWidget} from "@papercups-io/chat-widget";

export default function PapercupsWidget(): JSX.Element {
  return <ChatWidget accountId={process.env.PAPERCUPS_ID ?? ""} />;
}
