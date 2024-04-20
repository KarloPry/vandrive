import { Marker } from "@react-google-maps/api"

export default function GoogleMarker({lat, lng}) {
    return <Marker position={{lat, lng}} />
}