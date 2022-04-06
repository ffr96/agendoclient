import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { useUser } from "../../lib/useUser";
import { url } from "../../utils/url";


export default function PatientInfo () {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null);
  const { data:user } = useUser({
    redirectTo: '/login'
  });
  
  useEffect(() => {
    const fetchData = async() => {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `bearer ${user?.token}`
        }
      };
      const res = await fetch(`${url}/api/p/${id}`, options);
      const resjson = await res.json();
      setData(resjson);
    };
    void fetchData();
  }, [id, user?.token]);


  return (
    <Layout>
      {
        data && 
        data.name + ' ' + data.surname
      }
    </Layout>
  );
}
