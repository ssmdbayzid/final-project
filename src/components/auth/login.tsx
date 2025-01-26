
export default async function login({openLoginModal, setOpenLoginModal, openSignupModal, setOpenSignupModal,}
                                    :{openLoginModal:any, setOpenLoginModal:any, openSignupModal:any, setOpenSignupModal:any}){

    const onCloseModal = () => {
        setOpenLoginModal(!openLoginModal);
    }

    const handleSwitch = () => {
        setOpenLoginModal(!openLoginModal)
        setOpenSignupModal(!openSignupModal);
    }
    return (
        <div onClick={()=>{onCloseModal(); handleSwitch()}}>Login</div>
    )
}