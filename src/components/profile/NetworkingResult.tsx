import ProfileResultSkeleton from "../skeletons/common/ProfileResultSkeleton";
import {
  useGetMyNetwork,
  useGetReceivedNetwork,
  useGetPeopleWhoInterestMe,
  useGetMyInterest,
} from "../../hooks/relationQueries";

type NetworkingResultProps = {
  selectedTab:
    | "network"
    | "receivedNetwork"
    | "sendInterest"
    | "receivedInterest";
};
function NetworkingResult({ selectedTab }: NetworkingResultProps) {
  const { data: {result: network}, isLoading: networkLoading } = useGetMyNetwork();
  const { data: receivedNetwork, isLoading: receivedNetworkLoading } =
    useGetReceivedNetwork();
  const { data: receivedInterests, isLoading: receivedInterestsLoading } =
    useGetPeopleWhoInterestMe();
  const { data: myInterests, isFetching: myInterestsFetching } =
    useGetMyInterest();

  const isReady =
    !networkLoading &&
    !receivedNetworkLoading &&
    !receivedInterestsLoading &&
    !myInterestsFetching;

  const myInterestsData = myInterests?.pages.flatMap(
    (page) => page?.result?.interests
  );

  // matching what to show if no data exist
  const matchingData = {
    network: {
      data: network,
      message: "새로운 네트워크 관계를 만들어 보세요!",
    },
    receivedNetwork: {
      data: receivedNetwork,
      message: "받은 요청이 없습니다.",
    },
    sendInterest: {
      data: myInterestsData,
      message: "보낸 관심이 없습니다.",
    },
    receivedInterest: {
      data: receivedInterests,
      message: "받은 관심이 없습니다.",
    },
  };

  return (
    <>
      <div className="w-full h-auto">
        {matchingData[selectedTab].data?.length ? (
          
        ) : (
          
        )}
      </div>
      {!isReady && (
        <>
          <div className="flex flex-col gap-[20px]">
            <ProfileResultSkeleton />
            <ProfileResultSkeleton />
            <ProfileResultSkeleton />
            <ProfileResultSkeleton />
            <ProfileResultSkeleton />
          </div>
        </>
      )}
    </>
  );
}

export default NetworkingResult;
