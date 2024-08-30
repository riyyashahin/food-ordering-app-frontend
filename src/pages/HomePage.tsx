import landingImage from "..//assets/landing.png";
import appDownloadImage from "..//assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-6 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeaway today
        </h1>
        <span className="text-xl ">Food is just a click away!</span>
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the RiyyaEats App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
//flex-col we need all the elements in the page in a column
//gap-12 we need to add a gap of 12 in between each element
//rounded-lg add rounding to edges
//shadow-md will add shadow to the element
//py-8 add some padding to the inside of the div
//text-center aligns all texts to be on the center
//-mt-16 adds negative margin to the top of 16
// grid md:grid-cols-2 gap-5 will create a css grid which will default to a single column. medium screens will have 2 columns
// nothing to be added to the image as div className will manage the sizing
