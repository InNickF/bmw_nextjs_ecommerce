import React, { Component } from "react";
/* import slick from 'slick-carousel/slick/slick.css'
import slickTheme from 'slick-carousel/slick/slick-theme.css' */
import { Link } from "../../common/src/routes/bmw";
import {
  FullWidthSlider,
  InfoCard,
  ProductsSlider,
  CategoryTabs,
  Wrapper,
  BlogContainerPosts,
  SubCategoriesWrapper,
  GenerateTags,
  SubCategoriesSlider,
  SectionProductFilter,
  WrapperReverse,
} from "../../common/components";

import Footer from "../../components/Footer";

import { home as coreHome } from "../../common/redux";

import { dateHelpers, getOriginalUrl } from "../../common/helpers";

import withStore from "./store";

import {
  BlogCard,
  CardsContainer,
  HomeContainer,
  WhiteHomeSeparator,
  HomePage,
} from "../../styles/home";
import CategoryDetail from "../../common/src/components/CategoryDetail";

const homeActions = coreHome.actions;
const { getFormatedDate } = dateHelpers;

function SubCategoryHeaderCard({ title, titleTwo, subTitle }) {
  return (
    <div className="subcategory-header-card">
      <h2>
        {title}
        <span>{titleTwo}.</span>
      </h2>
      <p>{subTitle}</p>
      <Link
        route="products"
        params={{
          c: "accesorios-para-carros",
          level: 1,
        }}
      >
        <a className="cta-bold">VER TODO</a>
      </Link>
    </div>
  );
}

class Home extends Component {
  constructor(props) {
    super(props);
    /* this.props.store.dispatch(homeActions.getHomeData()) */
    /*   setTimeout(() => {
        this.setState({ isDetailDialogVisible: true })
      }, 50); */
  }

  state = {
    isOpen: false,
    isDetailDialogVisible: false,
  };

  static async getInitialProps({ store, req }) {
    /* const { lastEvent, getHomeData } = this.props */
    const home = store.getState();
    const state = home.toJS().home;
    /* store.dispatch(homeActions.getHomeData()) */
    /* let slides = await HomeService.fetchSlides(); */
    if (!state.lastEvent.brandId)
      store.dispatch(homeActions.getHomeData());

    return { originalUrl: getOriginalUrl(req) };
  }

  componentDidMount() {
    if (this.props.motivators.length)
      this.props.setCategoryTab(
        this.props.motivators[0].id,
        this.props.motivators[0].level
      );
  }

  toggleState = (keyName) =>
    this.setState((state) => ({ [keyName]: !state[keyName] }));

  render() {
    const {
      cards,
      lastEvent,
      homePost,
      slides,
      motivators,
      setCategoryTab,
      getCategoryTab,
      getInPartProducts,
      categoriesTabSelected,
      originalUrl,
    } = this.props;
    const motivatorsEnd = motivators.filter(
      (category, i) => category.label != "LIFESTYLE"
    );
    const testSubcategory = {
      title: "Encuentra",
      titleTwo: "tu estilo",
      subTitle:
        "Navega por nuestra selección de accesorios para carros y lifestyle.",
      slug: "/",
      callToActionText: "Ver todo",
    };

    return (
      <HomePage>
        <GenerateTags
          title="Compra artículos originales BMW."
          url={originalUrl}
          descriptionShort="Dale seguridad a tu aventura con Rider Equipment y Style BMW Motorrad y prepárate para todos los caminos. Compra aquí accesorios y equipamiento. MAKE LIFE A RIDE©"
        />
        <HomeContainer>
          <FullWidthSlider slides={slides} />
        </HomeContainer>
        <SubCategoriesWrapper>
          <SubCategoryHeaderCard
            title={testSubcategory.title}
            titleTwo={testSubcategory.titleTwo}
            subTitle={testSubcategory.subTitle}
            slug={testSubcategory.slug}
            callToActionText={testSubcategory.callToActionText}
          />
          <SubCategoriesSlider
            products={cards.top}
            subcategory={testSubcategory}
          />
        </SubCategoriesWrapper>

        {/*        <Wrapper>
            <SectionProductFilter
              image='https://autogermana.s3.us-west-1.amazonaws.com/admin/images/image-cards/21.png'
              title="Carros Usados."
              slug="/"
              callToActionText='Ver carros usados'
              arraySelects={usedCarsArray}
              prices={testPrices}
              info={false}
            />
          </Wrapper> */}
        <Wrapper>
          <CategoryTabs
            title="Los complementos perfectos para ti."
            slug="/"
            tabs={motivatorsEnd}
            changeTab={setCategoryTab}
            currentTab={categoriesTabSelected}
          />
          <CategoryDetail
            products={getInPartProducts("categoriesHome")}
            categoryCurrent={getCategoryTab(
              categoriesTabSelected,
              motivatorsEnd
            )}
          />
        </Wrapper>
        <Wrapper>
          <ProductsSlider
            products={getInPartProducts("featuredProducts")}
            title="Productos destacados."
            home={true}
          />
        </Wrapper>
        {/* <WhiteHomeSeparator /> */}
        <Wrapper>
          <SectionProductFilter
            image='https://res.cloudinary.com/cacaotics/image/upload/v1580662565/Rectangle_49.png'
            title="Llantas"
            slug={`${process.env.BRAND_ID == 3 ? '5918' : process.env.BRAND_ID == 2 ? '5916' : ''}`}
            callToActionText='Ver llantas'
            dark={parseInt(process.env.BRAND_ID) === 1 ? true : true}
            info={true}
            toolTipData={{
              img: 'data:image/jpeg;base64,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',
              width: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis .',
              profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Dui.',
              rin: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.'
            }}
          />
        </Wrapper>
        <Wrapper>
          <BlogContainerPosts title="Novedades" posts={homePost} />
        </Wrapper>
        {false && (
          <Wrapper>
            <CardsContainer>
              <div className="big">
                <InfoCard
                  callToActionText="VER EVENTO"
                  title={lastEvent.name + "."}
                  subTitle={getFormatedDate(lastEvent.startAt)}
                  url={`/evento/${lastEvent.slug}`}
                  type="event"
                  image={lastEvent.image}
                />
              </div>
              {cards.top.map((item) => (
                <div className="card" key={item.id}>
                  <InfoCard
                    key={item.id}
                    title={item.title + "."}
                    subTitle={item.descriptionShort}
                    callToActionText={item.callToAction}
                    url={item.url}
                    position={item.position}
                    type={item.type}
                    image={item.image}
                  />
                </div>
              ))}
            </CardsContainer>
          </Wrapper>
        )}
        {false && (
          <Wrapper>
            <BlogCard>
              <InfoCard
                key={homePost.id}
                title={homePost.name + "."}
                subTitle={homePost.intro}
                callToActionText="LEER"
                url={`/blog/${homePost.slug}`}
                type="post"
                image={homePost.image}
              />
            </BlogCard>
            <CardsContainer>
              {cards.bottom.map((item) => (
                <div
                  className={item.type === "flatcard" ? "card" : "big sentence"}
                  key={item.id}
                >
                  <InfoCard
                    key={item.id}
                    title={item.title + "."}
                    subTitle={item.descriptionShort}
                    callToActionText={item.callToAction}
                    url={item.url}
                    position={item.position}
                    type={item.type}
                    image={item.image}
                    withoutCallToAction
                  />
                </div>
              ))}
            </CardsContainer>
          </Wrapper>
        )}
      </HomePage>
    );
  }
}

export default withStore(Home);
