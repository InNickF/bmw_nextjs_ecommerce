import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  AlignWrapper,
  Button,
  ChassisFilterDialog,
  ChassisFilterForm,
  Icon,
  Modal,
  ModelFilterDialog,
  ModelFilterForm,
  ActualCarCard,
  ActualCarCardHeader
} from '../../components'

import {
  CloseButton,
  Container,
  DesktopContainers,
  FilterButtons,
  FilterFormModal,
  AllCompatibilitiesContainer,
  AllCompatibilitiesModalContent
} from './styles'

import withStore from './store'

function VehicleFilterBox({
  closeFilters,
  onChassisFilterSubmit,
  onModelFilterSubmit,
  isMobile,
  isHelpModalOpen,
  showingFilter,
  showChassisFilter,
  showModelFilter,
  toggleHelpModal,
  isChassisModalOpen,
  toggleChassisModal,
  isModelModalOpen,
  toggleModelModal,
  checkIfAuthenticated,
  series,
  models,
  years,
  theme,
  getModels,
  selectedCar,
  query,
  totalProducts,
  compatibility,
  change,
  compatibilities
}) {

  const [showOnAnimation, setToggleAnimation] = useState(false);
  const [showAllCompatibilities, setShowAllCompatibilities] = useState(false);

  const toggleAnimation = () => {
    setToggleAnimation(!showOnAnimation)
  }
  const closeModal = () => {
    setToggleAnimation(false)
  }

  const toggleCompatibilities = () => {
    setShowAllCompatibilities(!showAllCompatibilities)
  }

  return (
    <Container>
      {showingFilter.showing && (
        <CloseButton onClick={closeFilters}>
          <Icon
            name='cancel-button'
            fill={theme.colors.main}
            height={25}
            width={25}
          />
        </CloseButton>
      )}
      {!selectedCar.serie?.name &&
        <h3>
          {
            process.env.BRAND_ID === '1' ? 'Selecciona tu moto'
              : 'Selecciona tu carro'
          }
        </h3>}

      <DesktopContainers>
        {!selectedCar.serie ?
          <ModelFilterForm
            onSubmit={onModelFilterSubmit}
            closeModal={closeModal}
            quit={change}
            checkIfAuthenticated={checkIfAuthenticated}
            getModels={getModels}
            series={series}
            models={models}
            theme={theme}
            years={years}
            isResponsive={isMobile}
            totalProducts={totalProducts}
            hiddenTotal={compatibility?.serie}
          />
          :
          <>
            <ActualCarCardHeader selectedCar={selectedCar} change={toggleAnimation} quit={change} />
            {showOnAnimation &&
              <FilterFormModal>
                <div className="overlay-actual-car fade-in" onClick={closeModal} />
                <div className="conten-form right-in">
                  <ModelFilterForm
                    onSubmit={onModelFilterSubmit}
                    closeModal={closeModal}
                    quit={change}
                    checkIfAuthenticated={checkIfAuthenticated}
                    getModels={getModels}
                    series={series}
                    theme={theme}
                    models={models}
                    years={years}
                    isResponsive={isMobile}
                    totalProducts={totalProducts}
                    hiddenTotal={compatibility?.serie}
                  />
                </div>
              </FilterFormModal>
            }
          </>
        }
        {/* <ActualCarCard selectedCar={selectedCar} /> */}
      </DesktopContainers>

      {false && !isMobile &&
        showingFilter.showing && (
          <DesktopContainers>
            {showingFilter.filter === 'chassis' && (
              <ChassisFilterForm
                onSubmit={onChassisFilterSubmit}
                toggleModal={toggleHelpModal}
                checkIfAuthenticated={checkIfAuthenticated}
              />
            )}
            {showingFilter.filter === 'model' && (
              <ModelFilterForm
                onSubmit={onModelFilterSubmit}
                checkIfAuthenticated={checkIfAuthenticated}
                theme={theme}
                getModels={getModels}
                series={series}
                models={models}
                years={years}
              />
            )}
          </DesktopContainers>
        )}
      {false && !showingFilter.showing && (
        <FilterButtons>
          <Button action={showChassisFilter} type='line'>
            NÚMERO DE CHASIS
          </Button>
          <div className='o'>Ó</div>
          <Button action={showModelFilter} type='line'>
            DATOS DEL VEHÍCULO
          </Button>
        </FilterButtons>
      )}
      {compatibilities && compatibilities.length > 0 &&
        <AllCompatibilitiesContainer>
          <h4 onClick={toggleCompatibilities}>O mira la lista de todos los modelos compatibles</h4>
          <Modal
          isVisible={showAllCompatibilities}
          closeModal={toggleCompatibilities}
          >
            <AllCompatibilitiesModalContent>
              <h3>Modelos compatibles con este producto:</h3>
                <div className="compatibilities-list-container">
                  {compatibilities.map(compatibility =>
                    <div className="compatibility-module">
                      <h4>Modelo: {compatibility.vehicleModel.name}</h4>
                      <h5>{compatibility.vehicleSerie.name} | Carrocería: {compatibility.vehicleBodyWork.name}</h5>
                      <h5>Desde el año: {compatibility.yearStart} hasta el año: {compatibility.yearEnd}</h5>
                    </div>
                  )}
              </div>
            </AllCompatibilitiesModalContent>
          </Modal>
        </AllCompatibilitiesContainer>
      }
    </Container>
  )
}

VehicleFilterBox.defaultProps = {
  isMobile: false
}

VehicleFilterBox.propTypes = {
  series: PropTypes.array.isRequired,
  models: PropTypes.array.isRequired,
  years: PropTypes.array.isRequired,
  getModels: PropTypes.func.isRequired,
  closeFilters: PropTypes.func,
  onChassisFilterSubmit: PropTypes.func,
  onModelFilterSubmit: PropTypes.func,
  isMobile: PropTypes.bool,
  isHelpModalOpen: PropTypes.bool,
  isChassisModalOpen: PropTypes.bool,
  isModelModalOpen: PropTypes.bool,
  showingFilter: PropTypes.object,
  toggleHelpModal: PropTypes.func,
  showChassisFilter: PropTypes.func,
  showModelFilter: PropTypes.func,
  toggleChassisModal: PropTypes.func,
  toggleModelModal: PropTypes.func,
  checkIfAuthenticated: PropTypes.func,
  theme: PropTypes.object,
  query: PropTypes.object,
}

export default withStore(VehicleFilterBox)
