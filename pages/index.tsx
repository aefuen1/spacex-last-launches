import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/layout'
import { GetServerSideProps } from 'next'
import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client';
import styles from "../styles/Home.module.css"

export const getServerSideProps: GetServerSideProps = async context => {
  const link:HttpLink = new HttpLink({uri:"https://api.spacex.land/graphql/"});
  const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
  });
  const { data } = await client.query({
    query: gql`
      query GetLaunches {
        launchesPast(limit: 10) {
          id
          mission_name
          launch_date_local
          launch_site {
            site_name_long
          }
          links {
            article_link
            video_link
            mission_patch
          }
          rocket {
            rocket_name
          }
        }
      }
    `
  });
  return{
    props:{
      launches:data.launchesPast
    }
  };
}

export default function Home({launches}) {
  console.log(launches);
  return (
    <Layout>
    <div className={styles.grid}>
    {launches.map(launch => {
    return (
      <a key={launch.id} href={launch.links.video_link} target="_blank" className={styles.card}>
        <h3>{ launch.mission_name }</h3>
        <p><strong>Launch Date:</strong> { new Date(launch.launch_date_local).toLocaleDateString("en-US") }</p>
      </a>
    );
    })}
    </div>
    </Layout>
  );
}
