import { useContext, useEffect, useState, useMemo } from "react";
import { Context } from "../context/store";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Link from "next/link";
import cx from "classnames";

import Header from "../components/Header";
import Navbar from "../components/Navbar";

import styles from "../styles/Collection.module.scss";
import RewardImage from "../components/RewardImage";
import Card from "../components/Card";

const GET_COLLECTION = gql`
  {
    user(id: 7) {
      collections {
        card {
          id
          name
          rarity
          type
          isOpen
          image {
            url
          }
          realm {
            color
            background {
              url
            }
          }
        }
      }
    }
  }
`;

const Home = () => {
  const [store, dispatch] = useContext(Context);
  const { loading, error, data } = useQuery(GET_COLLECTION);
  const [cards, setCards] = useState([]);

  const [filters, setFilters] = useState({
    type: "",
    rarity: "",
    realm: "",
  });

  const addFilters = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value,
    });
  };

  useEffect(() => {
    !loading && data && setCards(data.user.collections);
  }, [data, loading]);

  const filterCards = () => {
    const res = cards.filter(
      (card) =>
        (!filters.type || card.card.type === filters.type) &&
        (!filters.realm || card.card.realm === filters.realm) &&
        (!filters.rarity || card.card.rarity === filters.rarity)
    );

    return res;
  };

  return (
    <div className="background_dark">
      <Header />
      <div className="section">
        {error && <div>Error: {error}</div>}
        {loading && <div>Loading...</div>}
        <div onClick={() => addFilters("realm", "health")}>rarity</div>
        <div onClick={() => addFilters("type", "free")}>type</div>
        <div onClick={() => addFilters("rarity", "common")}>all</div>

        {data && store.user && (
          <div>
            <div>
              Discovered: {data.user.collections.length}/{108}
            </div>
            <div className={styles.grid}>
              {filterCards().map((card, i) => {
                return <Card card={card.card} key={i} />;
              })}
            </div>
          </div>
        )}
      </div>

      <Navbar />
    </div>
  );
};

export default Home;
