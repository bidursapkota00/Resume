import { StyleSheet, Font } from '@react-pdf/renderer';
import { black1, common_style, yellow } from './common';

Font.register({
  family: 'Lato',
  fonts: [
    { src: '/font/lato400.ttf' },
    { src: '/font/Lato-Italic.ttf', fontStyle: 'italic' },
    { src: '/font/lato300.ttf', fontWeight: 300 },
    { src: '/font/lato600.ttf', fontWeight: 600 },
    { src: '/font/lato700.ttf', fontWeight: 700 },
  ],
});

export const styles = StyleSheet.create({
  ...common_style,
  page: {},
  top: {
    flexDirection: 'row',
  },
  top_left: {
    width: 173,
    position: 'relative',
  },
  ellipse: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  ellipse1: {
    width: 149,
    height: 218,
  },
  ellipse2: {
    width: 157,
    height: 196,
  },
  top_image: {
    border: '5 solid #ffffff',
    width: 115,
    height: 115,
    borderRadius: '50%',
    position: 'absolute',
    top: 30,
    left: 20,
  },
  profile: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  top_right: {
    width: 422,
  },
  top_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  links: {
    marginTop: 20,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  social_icon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  social_text: {
    fontSize: 11,
    color: black1,
    textDecoration: 'none',
  },
  job_title: {
    marginTop: 12,
  },
  job_row: {
    flexDirection: 'row',
  },
  job_text: {
    ...common_style.font,
    fontSize: 26,
    letterSpacing: 4.5,
    color: black1,
    textTransform: 'uppercase',
    paddingRight: 20,
    fontWeight: 300,
  },
  job_bg: {
    backgroundColor: yellow,
  },
  name_cont: {
    flexDirection: 'row',
    marginBottom: 11,
  },
  top_name: {
    ...common_style.font,
    fontWeight: 700,
    color: 'black',
    fontSize: 24,
    textTransform: 'uppercase',
    paddingBottom: 7,
  },
  underline: {
    borderBottom: '4 solid black',
  },
  top_description: {
    paddingRight: 20,
    lineHeight: 1.7,
    fontFamily: 'Lato',
    fontSize: 12,
    color: black1,
  },
  // -----------------------------------------------------------------------------------
  // -------------------------------CONTACTS----------------------------------------------------
  // -----------------------------------------------------------------------------------
  contac: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    border: '1 solid #C4C4C4',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 25,
  },
  contac_cont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contac_icont: {
    backgroundColor: '#373D48',
    transform: 'rotate(-45deg)',
    width: 26,
    height: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  contac_icon: {
    width: 16,
    height: 16,
    transform: 'rotate(45deg)',
  },
  contac_text1: {
    fontWeight: 700,
    fontSize: 11,
    color: black1,
  },
  contac_text2: {
    fontSize: 11,
    color: '#606060',
  },
  // -----------------------------------------------------------------------------------
  // ------------------------------------EXPERIENCE-----------------------------------------------
  // -----------------------------------------------------------------------------------
  exp: {
    position: 'relative',
    borderLeft: '1 solid #C4C4C4',
    borderBottom: '1 solid #C4C4C4',
    marginTop: 26,
    marginLeft: 31,
    paddingBottom: 16,
  },
  exp_exp: {
    fontWeight: 700,
    fontSize: 16,
    color: '#373D48',
    paddingLeft: 16,
  },
  exp_iconc: {
    width: 22,
    height: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: '#373D48',
    position: 'absolute',
    top: 0,
    left: -11,
  },
  exp_icon: {
    width: 12,
    height: 12,
  },
  exp_cont: {
    marginTop: 11,
    marginLeft: 16,
  },
  exp_titlec: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exp_title: {
    fontWeight: 600,
    fontSize: 12,
    color: black1,
  },
  exp_date: {
    padding: 8,
    paddingLeft: 12,
    paddingRight: 20,
    flexDirection: 'row',
    backgroundColor: yellow,
    alignItems: 'center',
  },
  exp_cal: {
    width: 9,
    height: 9,
    marginRight: 5,
  },
  exp_datet: {
    fontSize: 10,
    color: black1,
    textTransform: 'capitalize',
  },
  exp_tick: {
    width: 11,
    height: 11,
    position: 'absolute',
    top: 8,
    left: -21.5,
  },
  exp_org: {
    fontStyle: 'italic',
    fontSize: 12,
    color: black1,
    marginBottom: 7,
  },
  exp_desc: {
    flexDirection: 'row',
  },
  exp_cir: {
    width: 4,
    height: 4,
    backgroundColor: yellow,
    borderRadius: '50%',
    marginLeft: 3,
    marginRight: 6,
    marginTop: 6.5,
  },
  exp_des: {
    fontSize: 12,
    lineHeight: 1.3,
    color: black1,
    paddingRight: 20,
  },
  // -----------------------------------------------------------------------------------
  // ----------------------------------EDUCATION-------------------------------------------------
  // -----------------------------------------------------------------------------------
  edu: {
    flexDirection: 'row',
    marginTop: 25,
  },
  edu_left: {
    width: 20,
    backgroundColor: yellow,
    height: '100%',
  },
  edu_edu: {
    marginLeft: 22,
    marginTop: 0,
    flexGrow: 1,
  },
  // -----------------------------------------------------------------------------------
  // ----------------------------------------SKILLS-------------------------------------------
  // -----------------------------------------------------------------------------------
  skills: {
    marginTop: 30,
    marginLeft: 20,
  },
  skill: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  skill_box: {
    padding: '5 10',
    backgroundColor: yellow,
    flexDirection: 'row',
    alignItems: 'center',
  },
  skill_iconc: {
    width: 22,
    height: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: '#373D48',
    marginRight: 5,
  },
  skill_htext: {
    fontWeight: 700,
    fontSize: 16,
    color: '#373D48',
  },
  skill_line: {
    height: 1,
    backgroundColor: '#C4C4C4',
    flexGrow: 1,
  },
  svg: {
    width: 38,
    height: 38,
  },
  skill_circle: {
    strokeWidth: 5,
  },
  skill_cont: {
    flexDirection: 'row',
    marginRight: 20,
    width: 170,
    alignItems: 'center',
    marginBottom: 21,
  },
  svg_cont: {
    marginRight: 5,
  },
  skill_row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skill_namec: {},
  skill_name: {
    fontWeight: 600,
    fontSize: 14,
    color: black1,
    marginBottom: 4,
  },
  stars: {
    flexDirection: 'row',
  },
  star: {
    width: 10,
    height: 10,
    marginRight: 6,
  },
  // -----------------------------------------------------------------------------------------
  // ---------------------------------------TRAININGS--------------------------------------------------
  // -----------------------------------------------------------------------------------------
  ell: {
    position: 'absolute',
    right: 0,
    height: 223,
  },
  ell1: {
    width: 48,
    top: 37,
  },
  ell2: {
    width: 42,
    top: 0,
  },
  // -----------------------------------------------------------------------------------------
  // ------------------------------HOBBY/INTEREST/LANG-----------------------------------------------------------
  // -----------------------------------------------------------------------------------------
  hobby: {
    marginLeft: 29,
    marginTop: 48,
    marginRight: 15,
    flexDirection: 'row',
  },
  hobby_hobbyc: {
    width: 167,
    position: 'relative',
    backgroundColor: '#fccd43',
    marginRight: 25,
  },
  hobby_hobby: {
    width: 172,
    transform: 'translate(-9, -6)',
    backgroundColor: '#373D48',
    padding: 15,
    paddingTop: 31,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  hobby_item: {
    padding: '4 10',
    backgroundColor: '#ffffff',
    marginRight: 8,
    marginBottom: 10,
  },
  hobby_text: {
    fontWeight: 700,
    fontSize: 12,
    color: '#373D48',
    textTransform: 'capitalize',
  },
  hobby_hobbytc: {
    position: 'absolute',
    top: -22,
    left: 5,
  },
  // -----------------------------------------------------------------------------------------
  // ----------------------------------CERTIFICATES-------------------------------------------------------
  // -----------------------------------------------------------------------------------------
  certificate_cont: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  certificate: {
    width: 93,
    height: 62,
    objectFit: 'cover',
    marginRight: 10,
  },
  // -----------------------------------------------------------------------------------------
  // ----------------------------------REFERENCES-------------------------------------------------------
  // -----------------------------------------------------------------------------------------
  ref: {
    flexDirection: 'row',
    minHeight: 160,
    marginTop: 26,
  },
  ref_left: {
    width: 192,
    height: '100%',
  },
  el: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  el1: {
    width: 149,
    height: 157,
  },
  el2: {
    width: 157,
    height: 135,
  },
  ref_right: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  ref_ref: {
    borderBottom: '1 solid #C4C4C4',
    marginTop: 15,
    minWidth: 361,
  },
  ref_row: {
    flexDirection: 'row',
  },
  ref_text1: {
    fontWeight: 700,
    fontSize: 11,
    lineHeight: 1.8,
    color: '#505050',
  },
  ref_text2: {
    fontSize: 11,
    lineHeight: 1.8,
    color: '#505050',
  },
  ref_text3: {
    fontWeight: 600,
    fontSize: 11,
    lineHeight: 1.8,
    color: black1,
  },
  ref_text4: {
    fontSize: 11,
    lineHeight: 1.8,
    color: '#606060',
  },
});
