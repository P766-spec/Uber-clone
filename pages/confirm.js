import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'

const confirm = () => {
  const router = useRouter()
  const { pickup, dropoff } = router.query

  console.log("Pickup", pickup);
  console.log("Dropoff", dropoff);

  const [ pickupCoordinates, setPickupCoordinates ] = useState([0,0]);
  const [ dropoffCoordinates, setDropoffCoordinates ] = useState([0,0]);

  const getPickupCoordinates = (pickup) => {
   
    // Fetch function to call api
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
     new URLSearchParams({
       access_token: "pk.eyJ1IjoicGFsYWsxMiIsImEiOiJjbDg1ZjV5d2owMnNnNDBtaHFiOGx4MWJqIn0.-pV7izjsxLKjwEL1J815aQ",
       limit: 1
     })
    
    )
    .then(response => response.json())
    .then(data => {
      setPickupCoordinates(data.features[0].center);
    })
  }

  const getDropOfCoordinates = (dropoff) => {
    
    // Fetch function to call api
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
     new URLSearchParams({
       access_token: "pk.eyJ1IjoicGFsYWsxMiIsImEiOiJjbDg1ZjV5d2owMnNnNDBtaHFiOGx4MWJqIn0.-pV7izjsxLKjwEL1J815aQ",
       limit: 1
     })
    
    )
    .then(response => response.json())
    .then(data => {
      // console.log("Dropoff")
      
      
      setDropoffCoordinates(data.features[0].center)
    })

  }
  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropOfCoordinates(dropoff);

  }, [pickup, dropoff])
  
  return (
    <Wrapper>
      <Link href="/search">
      <ButtonContainer>
      <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
      </ButtonContainer>
      </Link>
    <Map 
    pickupCoordinates={pickupCoordinates}
    dropoffCoordinates={dropoffCoordinates}
    
    
    />
    <RideContainer>
      <RideSelector 
       pickupCoordinates={pickupCoordinates}
       dropoffCoordinates={dropoffCoordinates}
       />
      <ConfirmButtonContainer>
        <ConfirmButton>
        Confirm UberX
        </ConfirmButton>
       
      </ConfirmButtonContainer>

    </RideContainer>
    </Wrapper>
  )
}

export default confirm

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl rounded-full
`


const ConfirmButtonContainer = tw.div`
border-t-2 
`

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`

const Wrapper = tw.div`
 flex h-screen flex-col
`
const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`
const BackButton = tw.img`
h-full object-contain
`
