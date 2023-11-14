import { MdPlayArrow, MdEmail } from "react-icons/md";

const ContactInfo = () => {
  const iconStyle = `text-white text-4xl`;
  const contact = {
    icon: <MdPlayArrow />,
    contact: [
      "205",
      "Thiyaki Kumaran Street",
      "R.S.Puram",
      "Coimbatore",
      "Tamilnadu",
      "641 001",
    ],
  };
  return (
    <section className="bg-black">
      <h3 className="text-white font-bold">Contact</h3>
      {/* //! 1.email */}
      <div className="flex flex-wrap items-center gap-10 space-y-4 p-4 lg:space-y-0 ">
        <a className="flex items-center gap-4">
          <MdEmail className={iconStyle} />
          <h3 className="text-white">support@noava.in</h3>
        </a>
        {/* //! 2.address */}
        <div className="flex items-center gap-4">
          <MdPlayArrow className={iconStyle} />
          <div className="flex flex-col">
            {contact.contact.map((address, index) => {
              return (
                <h3 key={index} className="text-white">
                  {address}
                </h3>
              );
            })}
          </div>
        </div>
        {/* //! 3.location */}
        <div className="grid grid-cols-[1.3rem,1fr] items-center gap-4">
          <MdPlayArrow className={iconStyle} />
          <a
            className="text-white"
            href='https://goo.gl/maps/zjk4UBQXSSrEoW8GA'
            target="_blank"
          >
            location
          </a>
        </div>
      </div>
      {/* ---------------- */}
    </section>
  );
};
export default ContactInfo;
