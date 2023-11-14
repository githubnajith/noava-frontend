// ui components
import Card_ui from '../Card_ui';

const Skin_description_ui = () => {
  return (
    <section>
      <h3 className='text-2xl font-bold pt-6 text-gray-600  text-center'>Product Description</h3>
      <Card_ui
        heading='PROTECT'
        description='Mobile skins help protect devices from scratches,fingerprints and minor abrasions.They act as a barrier between the device and its surroundings,preserving its appearance and resale value.'
        src='https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fproduct_static%2Fskin_description%2FWhatsApp%20Image%202023-09-15%20at%205.44.14%20PM.jpeg?alt=media&token=2da0b934-3e45-4dd8-a09e-ce32dadf5697'
        alt='Protect your device'
        // link=''
      />
      <Card_ui
        heading='PRECISE'
        description={`"Transform devices with personalized flair - mobile skin wraps that protect and style"`}
        src='https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fproduct_static%2Fskin_description%2FWhatsApp%20Image%202023-09-15%20at%205.44.14%20PM%20(1).jpeg?alt=media&token=45420f6e-7438-4c48-a558-63a49dafcda7'
        alt='Persololize skins'
        link=''
      />
      <Card_ui
        heading='TEXTURED'
        description="Elevate your mobile style with NOAVA skin wraps.Unveil a world of personalization,protecting devices with precision.Express artistry and guard your gadgets seamlessly - That's NOAVA."
        src='/3.skins/skinDescription.jpeg'
        alt='Side cover'
        link=''
      />
      <Card_ui
        heading='NO RESIDUE'
        description='Utilizing top-notch materials and precise printing techniques, NOAVA produce durable and one-of-a-kind skins and wraps. Their meticulous attention to detail guarantees a seamless fit and a fashionable appearance for your device.'
        src='https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fproduct_static%2Fskin_description%2FWhatsApp%20Image%202023-09-15%20at%205.45.56%20PM.jpeg?alt=media&token=f0141be7-d7a5-43ac-9a5d-d63fa65eec79'
        alt='scratch free'
        link=''
      />
    </section>
  );
};

export default Skin_description_ui;
