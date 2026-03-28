import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

const FEATURABLE_WIDGET_ID = "02d896b2-2c43-46ae-bbe6-9783d9fc0c61";

export default function FeaturableWidget() {
  return (
    <ReactGoogleReviews
      layout="carousel"
      featurableId={FEATURABLE_WIDGET_ID}
      disableTranslation={true}
      theme="dark"
      maxCharacters={250}
      dateDisplay="relative"
      reviewVariant="card"
      nameDisplay="firstAndLastInitials"
    />
  );
}
