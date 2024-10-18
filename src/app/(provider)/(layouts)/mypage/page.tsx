import MyProfile from "./_components/MyProfile";
import MyPosting from "./_components/MyPosting";

const MyPage = () => {
  return (
    <div className="py-4 lg:flex lg:py-10">
      <MyProfile />
      <MyPosting />
    </div>
  );
};

export default MyPage;
