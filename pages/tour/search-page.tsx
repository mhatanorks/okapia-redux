import styles from "../../styles/search-page.module.css";
import Head from "next/head";
import Layout from "../../component/layout";
import { useState } from "react";
import { EuropeCountry, Spain } from "../../component/serchPage/serchEurope";
import { France } from "../../component/serchPage/serchEurope";
import { Italy } from "../../component/serchPage/serchEurope";
import Image from "next/image";
import useSWR from "swr";
import {
  AsiaCountry,
  Korea,
  Philippines,
  Taiwan,
} from "../../component/serchPage/serchAsia";
import {
  NorthameCountry,
  Uni,
} from "../../component/serchPage/sertchNorthAmerica";
import Link from "next/link";
import { Australia, OceCountry } from "../../component/serchPage/oceania";
import {
  SouthameCountry,Bra
} from "../../component/serchPage/southame";
import { Africa,Egy } from "../../component/serchPage/africa";

const fetcher = (resource: any, init: any) =>
  fetch(resource, init).then((res) => res.json());

const SearchPage = () => {
  type Abroad = "abroad" | "domestic" | "";
  const [abroad, setAbroad] = useState<Abroad>("abroad");
  type Prefecture = "osk" | "";
  const [prefecture, setPrefecture] = useState<Prefecture>("");
  type Area = "eu" | "asi" | "northame" | "oce" | "southame"|"af"|"";
  const [areaCode, setArea] = useState<Area>("");
  type Country = "fr" | "ita" | "ko" | "indo" | "ame" | "sp" | "taiwa" |"aus"| "phi"|"bra"|"";
  const [country, setCountry] = useState<Country>("");
  type City = "mila" | "vene" | "pari" | "bal" | "san" | "mar" | "";
  const [city, setCity] = useState<City>("");

  const [url, setUrl] = useState("/api/tours?recommend=true");
  const { data, error } = useSWR(url, fetcher);
  // エラーになった場合は一覧は表示できないのでここで終わり
  if (error) return <div>failed to load</div>;
  // データ取得が完了していないときはローディング画面
  if (!data) return <div>loading...</div>;

  const onsubmitHandler = (e) => {
    e.preventDefault();
    let query = "?";

    if (abroad.length > 0) {
      if (areaCode.length > 0) {
        if (country.length > 0) {
          if (city.length > 0) {
            query =
              query +
              `abroad=${abroad}&areaCode=${areaCode}&countryCode=${country}&cityCode=${city}`;
          } else {
            query =
              query +
              `abroad=${abroad}&areaCode=${areaCode}&countryCode=${country}`;
          }
        } else {
          query = query + `abroad=${abroad}&areaCode=${areaCode}`;
        }
      } else if(prefecture.length>0){
        query = query + `prefecture=${prefecture}`
      } else{
        query = query + `abroad=${abroad}`;
      }
    }

    setUrl(`/api/tours${query}`);
  };

  //areaCode=${areadCode}

  const onAbroadChange = (val) => {
    setAbroad(val);
    setArea("");
    setCountry("");
  };

  const onAreaChange = (val) => {
    setArea(val);
    setCountry("");
  };

  const onCountryChange = (val) => {
    setCountry(val);
    setCity("");
  };

  return (
    <>
      <Head>
        <title>ツアー検索</title>
      </Head>

      <Layout>
        <div className={styles.search_box_container}>
          <h3 className={styles.search_title}>現地ツアーを検索する</h3>
          <div className={styles.search_items}>
            <form action="" onSubmit={onsubmitHandler}>
              <div className={styles.flex}>
                <Abroad abroad={abroad} onAbroadChange={onAbroadChange} />
                {"abroad" === abroad && (
                  <RouteAbroad area={areaCode} onAreaChange={onAreaChange} />
                )}
                {"domestic" === abroad && (
                  <RouteJapan
                    prefecture={prefecture}
                    setPrefecture={setPrefecture}
                  />
                )}
                {"eu" === areaCode && (
                  <EuropeCountry
                    country={country}
                    onCountryChanege={onCountryChange}
                  />
                )}
                {"asi" === areaCode && (
                  <AsiaCountry
                    country={country}
                    onCountryChanege={onCountryChange}
                  />
                )}
                {"northame" === areaCode && (
                  <NorthameCountry
                    country={country}
                    onCountryChanege={onCountryChange}
                  />
                )}
                 {"oce" === areaCode && (
                  <OceCountry
                    country={country}
                    onCountryChanege={onCountryChange}
                  />
                )}
                  {"southame" === areaCode && (
                  <SouthameCountry
                    country={country}
                    onCountryChanege={onCountryChange}
                  />
                )}

{"af" === areaCode && (
                  <Africa
                    country={country}
                    onCountryChanege={onCountryChange}
                  />
                )}


                {"fr" === country && <France city={city} setCity={setCity} />}
                {"ita" === country && <Italy city={city} setCity={setCity} />}
                {"ko" === country && <Korea city={city} setCity={setCity} />}
                {"ame" === country && <Uni city={city} setCity={setCity} />}
                {"sp" === country && <Spain city={city} setCity={setCity} />}
                {"phi" === country && <Philippines city={city} setCity={setCity} />}
                {"taiwa" === country && (
                  <Taiwan city={city} setCity={setCity} />
                )}
                 {"aus" === country && (
                  <Australia city={city} setCity={setCity} />
                )}
                 {"bra" === country && (
                  <Bra city={city} setCity={setCity} />
                )}

{"egy" === country && (
                  <Egy city={city} setCity={setCity} />
                )}
                

              </div>
              <button className={styles.search_submit}>検索</button>
            </form>
          </div>
        </div>

        <div id="serch_result" className={styles.search_result}>
          {url.indexOf("recommend=true") > 0 ? (
            <span className={styles.headline}>おすすめ</span>
          ) : (
            <span className={styles.headline}>検索結果</span>
          )}

          {data.map((item: any) => {
            return (
              <>
                <div id="content" className={styles.eachcontent}>
                  <div key={item.id} className={styles.flex}>
                    <div>
                      <Image
                        src={item.img1}
                        width={300}
                        height={196}
                        alt="画像"
                        className={styles.image}
                      />
                    </div>
                    <div>
                      <div className={styles.title}>{item.tourName}</div>
                      <div className={styles.place}>
                        {item.area}&nbsp;{item.country}&nbsp;{item.city}&nbsp;
                      </div>
                      <div>
                        <div className={styles.flex}>
                          <div className={styles.flex}>
                            <div id="info">
                              <ul className={styles.list}>
                                <span className={styles.span}>概要</span>
                                <li>{item.tourName}</li>
                                <li>価格：{item.price}円</li>
                              </ul>
                            </div>
                            <div id="tourcontent">
                              <ul className={styles.list}>
                                <span className={styles.span}>
                                  含まれるもの
                                </span>
                                <li>{item.content1}</li>
                                <li>{item.content2}</li>
                                <li>{item.content3}</li>
                              </ul>
                            </div>
                          </div>

                          <div id="button" className={styles.button_around}>
                            <Link href={`/tour/${item.id}`}>
                              <button className={styles.button}>
                                詳細はこちら{" "}
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </Layout>
    </>
  );
};
export default SearchPage;

//国内or 海外
const Abroad = ({ abroad, onAbroadChange }) => {
  const changeHandler = (e) => {
    onAbroadChange(e.target.value);
  };
  return (
    <>
      <div className={styles.flex}>
        <div>
          <div>
            <label htmlFor="">国内 or 海外</label>
          </div>
          <select value={abroad} name="" id="" onChange={changeHandler}>
            <option value="">-</option>
            <option value="abroad">海外</option>
            <option value="domestic">国内</option>
          </select>
        </div>

        <div className={styles.serchdetail}></div>
      </div>
    </>
  );
};

// 海外を選んだ場合
const RouteAbroad = ({ area, onAreaChange }) => {
  const changeHandler = (e) => {
    onAreaChange(e.target.value);
  };

  return (
    <div className={styles.flex}>
      <div>
        <div>
          <label htmlFor="">エリア</label>
        </div>
        <select value={area} name="" id="" onChange={changeHandler}>
          <option value="">-</option>
          <option value="eu">ヨーロッパ</option>
          <option value="asi">アジア</option>
          <option value="northame">北米</option>
          <option value="southame">南米</option>
          <option value="oce">オセアニア</option>
          <option value="af">アフリカ</option>
        </select>
      </div>
      <div className={styles.serchdetail}></div>
    </div>
  );
};

// 国内を選んだ場合
const RouteJapan = ({ setPrefecture, prefecture }) => {
  const changeHandler = (e) => {
    setPrefecture(e.target.value);
  };
  return (
    <div>
      <div>
        <div>
          <label htmlFor="">都道府県</label>
        </div>
        <select value={prefecture} name="" id="" onChange={changeHandler}>
        <option value="-">-</option>
          <option value="hoka">北海道</option>
          <option value="miya"> 宮城</option>
          <option value="osk">大阪</option>
          <option value="kyo">京都</option>
          <option value="naga">長崎</option>
          <option value="fuku">福岡</option>
          <option value="oki"> 沖縄</option>
      
        </select>
      </div>
    </div>
  );
};
