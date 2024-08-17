export default function SideBar(props) {
    const { handleToggleModal, data } = props
    return (
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>{data?.title}</h2>
                <div className="descriptionContainer">
                    {/* <p className="descriptionTitle">{data?.date}</p> */}
                    <p className="descriptionTitle">2024 July 25</p>
                    {/* <p>{data?.explanation}</p> */}
                    <p>These cosmic clouds have blossomed 1,300 light-years away in the fertile starfields of the constellation Cepheus. Called the Iris Nebula, NGC 7023 is not the only nebula to evoke the imagery of flowers. Still, this deep telescopic image shows off the Iris Nebula's range of colors and symmetries embedded in surrounding fields of interstellar dust. Within the Iris itself, dusty nebular material surrounds a hot, young star. The dominant color of the brighter reflection nebula is blue, characteristic of dust grains reflecting starlight. Central filaments of the reflection nebula glow with a faint reddish photoluminescence as some dust grains effectively convert the star's invisible ultraviolet radiation to visible red light. Infrared observations indicate that this nebula contains complex carbon molecules known as PAHs. The dusty blue petals of the Iris Nebula span about six light-years.</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}