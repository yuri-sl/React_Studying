//import PropTypes from 'prop-types';

export default function Item(spName,spSchool){
    return(
        <>
            <li>{spName} {spSchool}</li>
        </>
    )
}

/*Item.propTypes = {
    spName : PropTypes.string.isRequired,
    spSchool : PropTypes.string,
}

Item.defaultProps = {
    spName: 'Faltou uma spell Name',
    spSchool : 'None',
}*/