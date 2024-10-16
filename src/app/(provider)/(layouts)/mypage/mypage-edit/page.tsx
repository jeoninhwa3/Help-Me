import MyProfileEdit from "./_components/MyProfileEdit";

const MypageEditPage = () => {
  return (
    <div className="max-w-[400px] mx-auto pt-4 pb-10 lg:pt-10">
      <h3 className="text-gray900 text-lg font-semibold">프로필 수정</h3>
      <MyProfileEdit />
    </div>
  );
};

export default MypageEditPage;
