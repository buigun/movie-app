import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const DetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query as Record<string, string>;
  const [data, setData] = React.useState<any>({});
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=e2b4f890&i=${id}&plot=full`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return <div>ini detail dengan imdbID: {id}</div>;
};

export default DetailPage;