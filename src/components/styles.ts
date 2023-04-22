export const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
};
    
export const introStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
};

export const titleStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
};

export const headerStyle: React.CSSProperties = {
    textAlign: 'left',
};

export const textStyle: React.CSSProperties = {
    margin: '0',
    paddingRight: '20px',
};

export const buttonStyle: React.CSSProperties = {
    padding: '10px 15px',
    height: '40px',
    border: '0',
    background: 'white',
    color: 'black',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.5)',
};
    
export const imageStyle: React.CSSProperties = {
    height: '150px',
    borderRadius: '200px',
};

export const iconStyle: React.CSSProperties = {
    width: '30px',
    marginLeft: '10px',
};

export const gifStyle: React.CSSProperties = {
    height: '200px',
    marginBottom: '1rem',
    marginTop: '1rem',
};

export const linkStyle = {
    marginRight: '1rem',
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.5)',
    transition: 'color 0.2s ease-out',
};

export const linkHoverStyle = {
    color: '#2980b9',
    textDecoration: 'none',
};

export const contentBox: React.CSSProperties = {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    margin: '4rem 1rem',
};


export const absoluteCenter : React.CSSProperties =  {
    textAlign:'center',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
};
