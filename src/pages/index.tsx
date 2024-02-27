import { useEffect, useState } from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Navbar from "../components/Navbar";
import UserDetails from "../components/UserDetails";
import axios from "axios";
import { IPhoto } from "@/interface";
import userDetail from "../constant/user1.json";
import PackageList from "../components/PackageList";

function fetchData() {
  return axios.get("https://jsonplaceholder.typicode.com/photos", {
    params: {
      _limit: 9,
    },
  });
}

const Home = () => {
  const [previousWork, setPreviousWork] = useState<IPhoto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDataAndHandleErrors() {
      try {
        const response = await fetchData();
        setPreviousWork(response.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchDataAndHandleErrors();
  }, []);

  return (
    <div className="bg-[#F6F6F6]">
      <Navbar />
      <MaxWidthWrapper>
        <main className="flex justify-between items-start gap-3 w-full my-20">
          <UserDetails previousWork={previousWork} userDetail={userDetail} />
          <section className="flex flex-col items-center w-1/2">
            <PackageList packages={userDetail?.packages} />
          </section>
        </main>
      </MaxWidthWrapper>
    </div>
  )
}

export default Home