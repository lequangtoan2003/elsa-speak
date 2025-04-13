import ConversationList from "./ConversationList";
import StudyOptions from "./StudyOptions";

const FooterHome = () => {
  return (
    <div className="">
        <div className="pl-14 w-full">
            <ConversationList />
        </div>
        <div className="flex flex-col items-center justify-center flex-1">
             <StudyOptions />
        </div>
    </div>
  );
}
export default FooterHome;