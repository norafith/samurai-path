import Contact from "./Contact/Contact";

import facebook from "../../../assets/socialMedia/facebook.png";
import github from "../../../assets/socialMedia/github.png";
import instagram from "../../../assets/socialMedia/instagram.png";
import twitter from "../../../assets/socialMedia/twitter.png";
import vk from "../../../assets/socialMedia/vk.png";
import website from "../../../assets/socialMedia/website.png";
import youtube from "../../../assets/socialMedia/youtube.png";

function Contacts(props) {
  const contactsArr = Object.values(props.contacts);
  if (contactsArr.filter((item) => item === null).length === contactsArr.length) {
    return;
  }

  const logosObj = { facebook, github, instagram, twitter, vk, website, youtube };
  const contactsElems = [];
  for (let socialNetworkName in props.contacts) {
    contactsElems.push(
      <Contact
        logo={logosObj[socialNetworkName]}
        socialNetworkLink={props.contacts[socialNetworkName]}
        socialNetworkName={socialNetworkName}
      />
    )
  }

  return <section>
    {contactsElems}
  </section>
}

export default Contacts;