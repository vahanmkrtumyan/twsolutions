/**
 * @typedef {import("@prismicio/client").Content.PartnersSlice} PartnersSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PartnersSlice>} PartnersProps
 * @param {PartnersProps}
 */
const Partners = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for partners (variation: {slice.variation}) Slices
    </section>
  );
};

export default Partners;
