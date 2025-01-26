

export default async function signup({openSignupModal, setOpenSignupModal, openLoginModal, setOpenLoginModal}
                                     : {openSignupModal:any, setOpenSignupModal:any, openLoginModal:any, setOpenLoginModal:any}){
    const onCloseModal = () => {
        setOpenSignupModal(!openSignupModal);
    }
    const handleSwitch = () => {
        setOpenSignupModal(!openSignupModal);
        setOpenLoginModal(!openLoginModal)
    }
    return (
        <div onClick={() => {
            onCloseModal();
            handleSwitch()
        }}>Login</div>
    )
}