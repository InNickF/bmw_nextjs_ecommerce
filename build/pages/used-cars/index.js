import React from 'react'
import Select from 'react-select'
import Collapsible from 'react-collapsible';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import {
  Icon
} from '../../common/components'

import { priceFormatter } from '../../common/helpers'


import {
  UsedCarContainer,
  UsedCarNavBar,
  UsedCarsContent,
  UsedCarsSearch,
  UsedCarFiltersContainer,
  UsedCarList,
  UsedCarSearchBox,
  UsedCarTagSearch,
  UsedCarTags,
  UsedCarTotalProducts,
  UsedCarFilter,
  UsedCarSelect,
  UsedCarCard,
  UsedCarName,
  UsedCarData,
  UsedCarItem,
  UsedCarUbication,
  Grid2Column,
  UsedCarGridItem,
  YearTabs,
  ColorSquares,
  ColorSquare
} from '../../styles/used-car'
import { BreadStep } from '../../styles/products';
import PriceSlider from '../../common/src/components/PriceSlider';

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: 'none',
    background: 'transparent',
    textAlign: 'center',
    fontWeight: '900',
    marginRight: '20px',
    width: 130,
    whiteSpace: 'nowrap',
    fontSize: 12
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected ? 'rgba(28, 105, 212, 0.9)' : '#ffff',
    '&:hover': {
      background: '#1c69d4',
      color: '#ffff'
    }
  }),
  indicatorSeparator: (styles) => ({ ...styles, display: 'none' })
}
const options = [
  { value: '1', label: 'Más nuevo' },
  { value: '2', label: 'Más barato' },
  { value: '3', label: 'Más bonito' }
]


class UsedCars extends React.Component {

  render() {
    return (
      <UsedCarContainer>
        <UsedCarNavBar>
          <BreadStep><a href="/">Home</a><span>/</span>{/* <a href={'/used-cars'}>Carros usados</a> */}</BreadStep>
          {/* <h2 className="header-title">Carros usados</h2> */}
          <Collapsible trigger="Tipo" open={true}>
            <Grid2Column>
              <UsedCarGridItem>
                <img
                  src={
                    'https://i.postimg.cc/PJxGywbf/suvs.png' || 'https://autogermana.s3.amazonaws.com/no%20-foto.png'
                  }
                  alt="Suvs"
                />
                <p>SUVs</p>
              </UsedCarGridItem>
              <UsedCarGridItem>
                <img
                  src={
                    'https://i.postimg.cc/ZRjt6cdD/sedan.png' || 'https://autogermana.s3.amazonaws.com/no%20-foto.png'
                  }
                  alt="Sedan"
                />
                <p>Sedan</p>
              </UsedCarGridItem>
              <UsedCarGridItem>
                <svg width="64" height="21" viewBox="0 0 64 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.8257 12.156C15.5882 12.156 17.022 13.5898 17.022 15.3521C17.022 17.1148 15.5882 18.5486 13.8257 18.5486C12.0632 18.5486 10.6294 17.1148 10.6294 15.3521C10.6294 13.5898 12.0632 12.156 13.8257 12.156ZM13.8257 17.5849C15.0567 17.5849 16.0582 16.5831 16.0582 15.3521C16.0582 14.1211 15.0567 13.1197 13.8257 13.1197C12.5947 13.1197 11.5931 14.1211 11.5931 15.3521C11.5931 16.5831 12.5947 17.5849 13.8257 17.5849Z" fill="#333333" />
                  <path d="M52.1816 12.156C53.9441 12.156 55.3779 13.5898 55.3779 15.3521C55.3779 17.1148 53.9441 18.5486 52.1816 18.5486C50.4191 18.5486 48.9854 17.1148 48.9854 15.3521C48.9854 13.5898 50.4192 12.156 52.1816 12.156ZM52.1816 17.5849C53.4126 17.5849 54.4142 16.5831 54.4142 15.3521C54.4142 14.1211 53.4126 13.1197 52.1816 13.1197C50.9506 13.1197 49.949 14.1211 49.949 15.3521C49.949 16.5831 50.9506 17.5849 52.1816 17.5849Z" fill="#333333" />
                  <path d="M1.24966 9.17272C1.53129 7.94594 2.03951 6.79684 2.75972 5.75786L2.97546 5.44681H6.16537C9.33158 4.46472 12.5476 3.59089 15.7265 2.84884C23.1435 1.11764 26.0861 0.968951 27.6538 1.00425C29.0043 1.03621 31.8147 1.10304 35.1419 2.11996C37.062 2.70623 38.8346 3.50856 40.0075 4.03981C41.1843 4.57253 42.3541 5.15271 43.487 5.76539C45.3938 5.91689 47.3047 6.13994 49.1695 6.42935C52.3369 6.92016 55.0722 7.34413 58.3829 8.59769C59.944 9.18873 61.4714 9.9002 62.9226 10.7124L63.2925 10.919V18.0296H56.6355C55.7238 19.5404 54.0712 20.5561 52.1816 20.5561C50.2733 20.5561 48.6062 19.5205 47.7004 17.9848V18.0296H18.2795C17.3678 19.5404 15.7152 20.5561 13.8256 20.5561C11.9223 20.5561 10.2591 19.5257 9.35174 17.9966C8.76515 17.9261 8.13014 17.8553 7.48651 17.7845C6.75291 17.7035 6.01953 17.6231 5.36849 17.5421L5.27276 17.5238C4.48879 17.3167 3.36202 16.8513 2.44586 15.8091C1.38873 14.6068 1.14452 13.2822 1.05249 12.3904C0.941208 11.3095 1.00756 10.2267 1.24966 9.17272ZM52.1816 19.1105C54.2539 19.1105 55.94 17.4244 55.94 15.3521C55.94 13.2797 54.2539 11.5937 52.1816 11.5937C50.1092 11.5937 48.4232 13.2797 48.4232 15.3521C48.4232 17.4244 50.1092 19.1105 52.1816 19.1105ZM13.8256 19.1105C15.898 19.1105 17.584 17.4244 17.584 15.3521C17.584 13.2797 15.898 11.5937 13.8256 11.5937C11.7533 11.5937 10.0673 13.2797 10.0673 15.3521C10.0673 17.4244 11.7533 19.1105 13.8256 19.1105ZM2.49052 12.2426C2.56821 12.9955 2.75644 13.9734 3.53141 14.8547C4.18996 15.6039 5.00923 15.9526 5.59646 16.1139C6.22866 16.1916 6.93665 16.2697 7.64463 16.3474C8.01542 16.3883 8.38569 16.429 8.74574 16.4698C8.66647 16.1093 8.62174 15.7361 8.62174 15.3521C8.62174 12.4826 10.9562 10.1482 13.8256 10.1482C16.6951 10.1482 19.0296 12.4826 19.0296 15.3521C19.0296 15.7772 18.9728 16.1883 18.8761 16.584H47.1311C47.0345 16.1883 46.9776 15.7772 46.9776 15.3521C46.9776 12.4826 49.3121 10.1482 52.1816 10.1482C55.0511 10.1482 57.3855 12.4826 57.3855 15.3521C57.3855 15.7772 57.3287 16.1883 57.2321 16.584H61.8469V11.7698C60.5691 11.0771 59.2334 10.4653 57.8709 9.9496C54.7017 8.74965 52.0355 8.33653 48.9481 7.85794C47.0692 7.5662 45.1427 7.34316 43.2216 7.19446L43.0675 7.18271L42.9318 7.10883C41.7876 6.48578 40.6029 5.89618 39.4112 5.35642C38.2722 4.84117 36.5507 4.06191 34.7195 3.50241C31.5821 2.54344 29.0043 2.48226 27.6194 2.44978C26.1301 2.4112 23.3112 2.5627 16.0549 4.25675C12.8749 4.99881 9.6567 5.87502 6.4896 6.85986L6.38493 6.89235H3.74202C3.23523 7.69606 2.87121 8.57036 2.65854 9.49642C2.45195 10.3957 2.39548 11.3194 2.49052 12.2426Z" fill="#333333" stroke="white" strokeWidth="0.3" />
                  <path d="M42.1588 8.79395H42.6406V14.9381H42.1588V8.79395Z" fill="#333333" />
                  <path d="M25.472 13.1286L25.0273 13.314L23.0676 8.61296L23.5123 8.42759L25.472 13.1286Z" fill="#333333" />
                  <path d="M24.5038 6.81046L23.6808 3.38665L24.1887 3.30008C25.5449 3.06857 26.9357 2.95327 28.3099 2.97162C29.8075 2.98665 31.3396 3.14948 32.741 3.44359C35.3919 4.00071 37.9468 5.07736 40.3349 6.64435L41.6621 7.51489L40.0749 7.52897C39.661 7.53278 39.2465 7.53463 38.831 7.53463C36.6843 7.53463 34.5195 7.48568 32.3791 7.38832C29.8703 7.27396 27.3354 7.09092 24.8447 6.84433L24.5038 6.81046ZM25.2805 5.91875C27.6443 6.14651 30.0454 6.31733 32.4229 6.42554C34.3894 6.51491 36.376 6.56339 38.3505 6.57C36.4925 5.53991 34.5454 4.80727 32.5431 4.38658C31.2029 4.10564 29.7358 3.94943 28.3005 3.9353C28.2283 3.9344 28.1563 3.9344 28.0843 3.9344C27.0065 3.9344 25.9251 4.01298 24.86 4.16919L25.2805 5.91875Z" fill="#333333" />
                  <path d="M20.6874 3.94794C21.3422 3.79549 22.0052 3.66515 22.6577 3.56022L23.1141 3.48682L23.7773 6.74309L23.132 6.6843C22.5412 6.63016 21.3899 6.51396 20.3176 6.33843C20.1013 6.30313 19.6985 6.23772 19.215 6.02171C18.8659 5.86597 18.5372 5.65986 18.2379 5.40856L17.5697 4.84769L18.4005 4.58088C19.1548 4.33852 19.9242 4.12537 20.6874 3.94794ZM20.4728 5.38692C21.205 5.50694 21.9779 5.59869 22.5734 5.6613L22.3551 4.58888C21.8727 4.67449 21.3871 4.77425 20.906 4.88627C20.5119 4.97803 20.1162 5.07968 19.722 5.18976C20.0406 5.31681 20.3065 5.3601 20.4728 5.38692Z" fill="#333333" />
                </svg>
                <p>Coupe</p>
              </UsedCarGridItem>
              <UsedCarGridItem>
                <img
                  src={
                    'https://i.postimg.cc/0Q9163bw/cabrio.png' || 'https://autogermana.s3.amazonaws.com/no%20-foto.png'
                  }
                  alt="Cabrio"
                />
                <p>Cabrio</p>
              </UsedCarGridItem>
              <UsedCarGridItem>
                <img
                  src={
                    'https://i.postimg.cc/C563QxJG/hatch.png' || 'https://autogermana.s3.amazonaws.com/no%20-foto.png'
                  }
                  alt="Hatch"
                />
                <p>Hatch</p>
              </UsedCarGridItem>
            </Grid2Column>
          </Collapsible>
          <Collapsible trigger="Energía" open={true} >
            <Grid2Column>
              <UsedCarGridItem>
                <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.4663 4.13584C16.607 0.472951 21.4643 1.03035 21.7828 1.03035C22.2606 1.03035 22.5791 1.34886 22.5791 1.82663V3.41919C22.5791 3.89695 22.2606 4.21547 21.7828 4.21547C21.3051 4.29509 17.7218 3.7377 14.5367 6.60431V12.0986C14.5367 12.9745 13.82 13.6912 12.9441 13.6912V19.2652C12.9441 20.6188 11.909 21.654 10.5553 21.654H5.7776V22.4503C5.7776 22.928 5.45909 23.2465 4.98132 23.2465V25.6354C4.98132 26.1132 4.66281 26.4317 4.18504 26.4317H2.59248C2.11471 26.4317 1.7962 26.1132 1.7962 25.6354V23.2465C1.31843 23.2465 0.999922 22.928 0.999922 22.4503V14.4875C1.07955 8.35612 6.25537 3.49881 12.4663 4.13584ZM5.85723 20.0614H10.6349C11.1127 20.0614 11.4312 19.7429 11.4312 19.2652V13.6912H9.44049C8.72384 15.443 8.88309 17.2745 9.59974 18.867C7.68867 17.9115 6.81276 15.6819 7.68867 13.6912H7.37016C6.49425 13.6912 5.7776 14.4078 5.7776 15.2838V20.0614H5.85723Z" stroke="black" strokeLinejoin="round" />
                </svg>
                <p>Gasolina</p>
              </UsedCarGridItem>
              <UsedCarGridItem>
                <svg width="23" height="30" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.3587 6.11073L21.1992 5.95008C20.7138 5.46578 19.8875 5.26553 19.4026 5.75092L15.4096 9.7439L12.8543 7.1881L16.8468 3.19563C17.3322 2.71081 17.3718 2.12334 16.887 1.63847L16.7274 1.4789C16.242 0.993519 15.4158 0.79379 14.9309 1.27917L10.9379 5.27165L9.34058 3.67433L2.33034 10.6846C1.15093 11.8651 1.0421 13.9021 2.22265 15.0826L7.92179 20.7817C9.10234 21.9623 11.0523 21.7665 12.2328 20.5865L19.2425 13.5768L17.3261 11.6598L21.3185 7.66737C21.8039 7.1825 21.8435 6.59502 21.3587 6.11073ZM12.6379 14.6374L5.56571 15.2606L9.42816 13.3442L7.56141 11.4774L14.6336 10.8542L10.7711 12.7712L12.6379 14.6374Z" stroke="black" strokeLinejoin="round" />
                  <path d="M3.14009 18.0942C0.265726 20.9692 0.29749 25.5966 3.17077 28.4699C3.35433 28.6534 3.53007 28.8403 3.72648 28.9999C1.38041 26.1104 2.49348 22.5576 5.0482 20.0024L3.14009 18.0942Z" stroke="black" strokeLinejoin="round" />
                </svg>
                <p>Eléctrico</p>
              </UsedCarGridItem>
              <UsedCarGridItem>
                <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.4663 4.13584C16.607 0.472951 21.4643 1.03035 21.7828 1.03035C22.2606 1.03035 22.5791 1.34886 22.5791 1.82663V3.41919C22.5791 3.89695 22.2606 4.21547 21.7828 4.21547C21.3051 4.29509 17.7218 3.7377 14.5367 6.60431V12.0986C14.5367 12.9745 13.82 13.6912 12.9441 13.6912V19.2652C12.9441 20.6188 11.909 21.654 10.5553 21.654H5.7776V22.4503C5.7776 22.928 5.45909 23.2465 4.98132 23.2465V25.6354C4.98132 26.1132 4.66281 26.4317 4.18504 26.4317H2.59248C2.11471 26.4317 1.7962 26.1132 1.7962 25.6354V23.2465C1.31843 23.2465 0.999922 22.928 0.999922 22.4503V14.4875C1.07955 8.35612 6.25537 3.49881 12.4663 4.13584ZM5.85723 20.0614H10.6349C11.1127 20.0614 11.4312 19.7429 11.4312 19.2652V13.6912H9.44049C8.72384 15.443 8.88309 17.2745 9.59974 18.867C7.68867 17.9115 6.81276 15.6819 7.68867 13.6912H7.37016C6.49425 13.6912 5.7776 14.4078 5.7776 15.2838V20.0614H5.85723Z" stroke="black" strokeLinejoin="round" />
                </svg>
                <p>Diesel</p>
              </UsedCarGridItem>
              <UsedCarGridItem>
                <div className="paired-items">
                  <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.4663 4.13584C16.607 0.472951 21.4643 1.03035 21.7828 1.03035C22.2606 1.03035 22.5791 1.34886 22.5791 1.82663V3.41919C22.5791 3.89695 22.2606 4.21547 21.7828 4.21547C21.3051 4.29509 17.7218 3.7377 14.5367 6.60431V12.0986C14.5367 12.9745 13.82 13.6912 12.9441 13.6912V19.2652C12.9441 20.6188 11.909 21.654 10.5553 21.654H5.7776V22.4503C5.7776 22.928 5.45909 23.2465 4.98132 23.2465V25.6354C4.98132 26.1132 4.66281 26.4317 4.18504 26.4317H2.59248C2.11471 26.4317 1.7962 26.1132 1.7962 25.6354V23.2465C1.31843 23.2465 0.999922 22.928 0.999922 22.4503V14.4875C1.07955 8.35612 6.25537 3.49881 12.4663 4.13584ZM5.85723 20.0614H10.6349C11.1127 20.0614 11.4312 19.7429 11.4312 19.2652V13.6912H9.44049C8.72384 15.443 8.88309 17.2745 9.59974 18.867C7.68867 17.9115 6.81276 15.6819 7.68867 13.6912H7.37016C6.49425 13.6912 5.7776 14.4078 5.7776 15.2838V20.0614H5.85723Z" stroke="black" strokeLinejoin="round" />
                  </svg>
                  <span>+</span>
                  <svg width="23" height="30" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.3587 6.11073L21.1992 5.95008C20.7138 5.46578 19.8875 5.26553 19.4026 5.75092L15.4096 9.7439L12.8543 7.1881L16.8468 3.19563C17.3322 2.71081 17.3718 2.12334 16.887 1.63847L16.7274 1.4789C16.242 0.993519 15.4158 0.79379 14.9309 1.27917L10.9379 5.27165L9.34058 3.67433L2.33034 10.6846C1.15093 11.8651 1.0421 13.9021 2.22265 15.0826L7.92179 20.7817C9.10234 21.9623 11.0523 21.7665 12.2328 20.5865L19.2425 13.5768L17.3261 11.6598L21.3185 7.66737C21.8039 7.1825 21.8435 6.59502 21.3587 6.11073ZM12.6379 14.6374L5.56571 15.2606L9.42816 13.3442L7.56141 11.4774L14.6336 10.8542L10.7711 12.7712L12.6379 14.6374Z" stroke="black" strokeLinejoin="round" />
                    <path d="M3.14009 18.0942C0.265726 20.9692 0.29749 25.5966 3.17077 28.4699C3.35433 28.6534 3.53007 28.8403 3.72648 28.9999C1.38041 26.1104 2.49348 22.5576 5.0482 20.0024L3.14009 18.0942Z" stroke="black" strokeLinejoin="round" />
                  </svg>
                </div>
                <p>Híbrido</p>
              </UsedCarGridItem>
            </Grid2Column>
          </Collapsible>
          <Collapsible trigger="Serie">
          </Collapsible>
          <Collapsible trigger="Modelo">
          </Collapsible>
          <Collapsible trigger="Asientos" open={true} >
            <div className="flex-chair">
              <div className="selected">2</div>
              <div>4</div>
              <div>5</div>
              <div>7</div>
            </div>
          </Collapsible>
          <Collapsible trigger="Año" open={true} >
            <YearTabs>
              <Tabs>
                <TabList>
                  <Tab>2010s</Tab>
                  <Tab>2000s</Tab>
                  <Tab>1990s</Tab>
                </TabList>
                <TabPanel>
                  {[...Array(10)].map((e, i) => <button>{2010 + i}</button>)}
                </TabPanel>
                <TabPanel>
                  {[...Array(10)].map((e, i) => <button>{2000 + i}</button>)}
                </TabPanel>
                <TabPanel>
                  {[...Array(10)].map((e, i) => <button>{1990 + i}</button>)}
                </TabPanel>
              </Tabs>
            </YearTabs>
          </Collapsible>
          <Collapsible trigger="Pico y placa" open={true} >
            <Grid2Column>
              <button className="itemEvenOdd">
                <p>Par</p>
                <p>2,4,6,8</p>
              </button>
              <button className="itemEvenOdd">
                <p>Impar</p>
                <p>1,3,5,7,9</p>
              </button>
            </Grid2Column>
          </Collapsible>
          <Collapsible trigger="Último número de placa" open={true} >
            <div className="grid-placa">
              <button>0</button>
              <button>1</button>
              <button>2</button>
              <button className="selected">3</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>7</button>
              <button>8</button>
              <button className="selected">9</button>
            </div>
          </Collapsible>
          <Collapsible trigger="Colores" open={true} >
            <ColorSquares>
              {['#000077', '#095677', '#775677', '#896787', '#345337', '#ffffff', '#135677'].map((color, i) =>
                <ColorSquare color={color} key={i} bordered={color === '#ffffff' || color === 'white'} />
              )}
            </ColorSquares>
          </Collapsible>
          <Collapsible trigger="Kilometraje" >
          </Collapsible>
          <Collapsible trigger="Precio" open={true} >
            <PriceSlider />
          </Collapsible>
        </UsedCarNavBar>
        <UsedCarsContent>
          <div className="hide-mobil header">
            <h2>Carros usados</h2>
            <p>8 artículos</p>
          </div>
          <UsedCarsSearch>
            <UsedCarSearchBox>
              <Icon name='find' width={20} height={20} />
              <input type="search" placeholder="Busca el modelo, serie, año, etc..." />
            </UsedCarSearchBox>
            <UsedCarTagSearch>
              <UsedCarTags> Borrar todo <span>x</span></UsedCarTags>
              <UsedCarTags> Serie 3 <span>x</span></UsedCarTags>
            </UsedCarTagSearch>
          </UsedCarsSearch>
          <UsedCarFiltersContainer>
            <UsedCarTotalProducts>124 artículos</UsedCarTotalProducts>
            <UsedCarFilter>
              <p>Filtros</p>
              <Icon name='down-arrow' width={20} height={20} />
            </UsedCarFilter>
            <UsedCarSelect>
              <p>Ordenar por: </p>
              <Select options={options} styles={customStyles} placeholder="Más nuevo" />
            </UsedCarSelect>
          </UsedCarFiltersContainer>
          <UsedCarList>
            {[...Array(16)].map((e, i) =>
              <UsedCarCard>
                <img
                  src={
                    'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
                  }
                  alt="name"
                />
                <UsedCarName>
                  <p>Nombre del producto</p>
                  <p>{'2019'}</p>
                </UsedCarName>
                <UsedCarData>
                  <UsedCarItem>
                    <p>Precio:</p>
                    <p className="price-total">{priceFormatter('1324543')}</p>
                  </UsedCarItem>
                  <UsedCarItem>
                    <p>Kilometraje:</p>
                    <p>16000 km</p>
                  </UsedCarItem>
                </UsedCarData>
                <UsedCarUbication>
                  <Icon name='check-mark' width={8} height={11} />
                  <div className="concecionary-data">
                    <p>Bogotá</p>
                    <p>Concecionario autogermana Autonorte</p>
                  </div>
                </UsedCarUbication>
                <div className="hover-data">
                  <div className="hover-data-colors">
                    <div className="hover-data-color"><p>Exterior</p><div style={{ background: '#183d98' }}></div></div>
                    <div className="hover-data-color"><p>Interior</p><div style={{ background: '#b3a351' }}></div></div>
                  </div>
                  <div className="hover-data-transmision">
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.862725 1.85039C0.862725 0.98277 1.55163 0.279297 2.40161 0.279297C3.25144 0.279297 3.94049 0.982619 3.94049 1.85039C3.94049 2.53344 3.51091 3.10892 2.91462 3.32526V5.37653C2.91462 5.95489 3.37384 6.42387 3.94049 6.42387H7.01796V3.32526C6.42167 3.10892 5.99209 2.53344 5.99209 1.85039C5.99209 0.98277 6.68099 0.279297 7.53097 0.279297C8.38095 0.279297 9.06986 0.982619 9.06986 1.85039C9.06986 2.53344 8.64027 3.10892 8.04398 3.32526V6.42387H12.1475V3.32526C11.5512 3.10892 11.1216 2.53344 11.1216 1.85039C11.1216 0.98277 11.8105 0.279297 12.6605 0.279297C13.5105 0.279297 14.1992 0.982619 14.1992 1.85039C14.1992 2.53344 13.7696 3.10892 13.1733 3.32526V10.5697C13.7696 10.7862 14.1992 11.3615 14.1992 12.0445C14.1992 12.9122 13.5103 13.6156 12.6603 13.6156C11.8104 13.6156 11.1215 12.9123 11.1215 12.0445C11.1215 11.3615 11.551 10.786 12.1473 10.5697V7.47122H8.04383V10.5698C8.64012 10.7862 9.06971 11.3617 9.06971 12.0447C9.06971 12.9123 8.3808 13.6158 7.53082 13.6158C6.68084 13.6158 5.99194 12.9125 5.99194 12.0447C5.99194 11.3617 6.42152 10.7862 7.01781 10.5698V7.47122H3.9402C2.80882 7.47122 1.88845 6.53144 1.88845 5.37653V3.32526C1.29231 3.10877 0.862725 2.53344 0.862725 1.85039Z" fill="black" />
                    </svg>
                    Automático
                  </div>
                </div>
              </UsedCarCard>
            )}
          </UsedCarList>
          <div className="data-footer hide-mobil">8 de 8 artículos</div>
        </UsedCarsContent>
      </UsedCarContainer>
    )
  }
}

export default UsedCars
