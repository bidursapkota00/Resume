import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  Image,
  Link,
  Font,
  Svg,
  Circle,
  Path,
} from '@react-pdf/renderer';
import { styles } from './css';
import { circle } from './common';

export default function Resume({ data }) {
  const name = data.name.split(' ');
  let job = data.job.split(' ');
  let index = job.length - 1;
  job.splice(index, 0, job[index].charAt(0));
  job.splice(index + 1, 1, job[index + 1].substring(1));
  index = job.length - 1;
  Font.registerHyphenationCallback((word) => [word]);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* --------------------------------------------------------------------------- */}
        {/* ----------------------------------TOP-------------------------------------- */}
        {/* --------------------------------------------------------------------------- */}
        <View style={styles.top}>
          <View style={styles.top_left}>
            <Image
              source={'/ellipse1.png'}
              style={[styles.ellipse, styles.ellipse1]}
            ></Image>
            <Image
              source={'/ellipse2.png'}
              style={[styles.ellipse, styles.ellipse2]}
            ></Image>
            <View style={styles.top_image}>
              <Image source={data.profile} style={styles.profile}></Image>
            </View>
          </View>
          <View style={styles.top_right}>
            <View style={styles.top_row}>
              <View style={styles.links}>
                {/* <View style={styles.link}>
                  <Image style={styles.social_icon} source={'/tw.png'} />
                  <Link src={data.tw} style={[styles.social_text, styles.font]}>
                    Twitter link here
                  </Link>
                </View> */}
                <View style={styles.link}>
                  <Image style={styles.social_icon} source={'/fb.png'} />
                  <Link src={data.fb} style={[styles.social_text, styles.font]}>
                    Facebook
                  </Link>
                </View>
                <View style={styles.link}>
                  <Image style={styles.social_icon} source={'/in.png'} />
                  <Link src={data.in} style={[styles.social_text, styles.font]}>
                    Linkedin
                  </Link>
                </View>
              </View>
              {job ? (
                <View style={styles.job_title}>
                  {job.map((j, i) => {
                    if (i == index - 1) return;
                    else if (i == index)
                      return (
                        <View style={styles.job_row}>
                          <Text style={[styles.job_text, { paddingRight: 0 }]}>
                            {job[index - 1]}
                          </Text>
                          <Text style={[styles.job_text, styles.job_bg]}>
                            {j}
                          </Text>
                        </View>
                      );
                    else
                      return (
                        <Text style={[styles.job_text, { paddingRight: 0 }]}>
                          {j}
                        </Text>
                      );
                  })}
                </View>
              ) : null}
            </View>
            <View style={styles.name_cont}>
              {name.map((n, i) => {
                if (i == 0)
                  return (
                    <Text style={[styles.top_name, styles.underline]}>{n}</Text>
                  );
                else
                  return (
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.top_name}> </Text>
                      <Text style={styles.top_name}>{n}</Text>
                    </View>
                  );
              })}
            </View>
            <Text style={[styles.font, styles.top_description]}>
              {data.about}
            </Text>
          </View>
        </View>
        {/* --------------------------------------------------------------------------- */}
        {/* ---------------------------------CONTACTS---------------------------------- */}
        {/* --------------------------------------------------------------------------- */}
        <View style={styles.contac} wrap={false}>
          <View style={styles.contac_cont}>
            <View style={styles.contac_icont}>
              <Image style={styles.contac_icon} source={'/phone.png'}></Image>
            </View>
            <View style={styles.contac_text}>
              <Text style={[styles.font, styles.contac_text1]}>Phone:</Text>
              <Text style={[styles.font, styles.contac_text2]}>
                +977 {data.phone}
              </Text>
            </View>
          </View>
          <View style={styles.contac_cont}>
            <View style={styles.contac_icont}>
              <Image style={styles.contac_icon} source={'/email.png'}></Image>
            </View>
            <View style={styles.contac_text}>
              <Text style={[styles.font, styles.contac_text1]}>Email:</Text>
              <Text style={[styles.font, styles.contac_text2]}>
                {data.email}
              </Text>
            </View>
          </View>
          <View style={styles.contac_cont}>
            <View style={styles.contac_icont}>
              <Image style={styles.contac_icon} source={'/address.png'}></Image>
            </View>
            <View style={styles.contac_text}>
              <Text style={[styles.font, styles.contac_text1]}>Address:</Text>
              <Text style={[styles.font, styles.contac_text2]}>
                {data.address}
              </Text>
            </View>
          </View>
        </View>
        {/* --------------------------------------------------------------------------- */}
        {/* ----------------------------------EXPERIENCE------------------------------- */}
        {/* --------------------------------------------------------------------------- */}
        <View style={styles.exp}>
          <View style={styles.exp_iconc}>
            <Image style={styles.exp_icon} source={'/head.png'}></Image>
          </View>
          <Text style={[styles.font, styles.exp_exp]}>Experience</Text>
          {data.experience.map((e, i) => (
            <View style={styles.exp_cont} wrap={false}>
              <View style={styles.exp_titlec}>
                <Text style={[styles.font, styles.exp_title]}>
                  {e.jobTitle}
                </Text>
                <View style={styles.exp_date}>
                  <Image
                    source={'/calender.png'}
                    style={styles.exp_cal}
                  ></Image>
                  <Text style={[styles.font, styles.exp_datet]}>
                    {e.startDate} - {e.endDate}
                  </Text>
                </View>
                <Image style={styles.exp_tick} source={'/tick.png'}></Image>
              </View>
              <Text style={[styles.font, styles.exp_org]}>
                {e.organization}
              </Text>
              {e.description.map((d, i) => (
                <View style={styles.exp_desc}>
                  <View style={styles.exp_cir}></View>
                  <Text style={[styles.font, styles.exp_des]}>{d}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
        {/* --------------------------------------------------------------------------- */}
        {/* --------------------------------------EDUCATION---------------------------- */}
        {/* --------------------------------------------------------------------------- */}
        <View style={styles.edu}>
          <View style={styles.edu_left}></View>
          <View style={[styles.exp, styles.edu_edu]}>
            <View style={styles.exp_iconc}>
              <Image style={styles.exp_icon} source={'/head.png'}></Image>
            </View>
            <Text style={[styles.font, styles.exp_exp]}>Education</Text>
            {data.education.map((e, i) => (
              <View style={styles.exp_cont} wrap={false}>
                <View style={styles.exp_titlec}>
                  <Text style={[styles.font, styles.exp_title]}>{e.title}</Text>
                  <View style={styles.exp_date}>
                    <Image
                      source={'/calender.png'}
                      style={styles.exp_cal}
                    ></Image>
                    <Text style={[styles.font, styles.exp_datet]}>
                      {e.startDate} - {e.endDate}
                    </Text>
                  </View>
                  <Image style={styles.exp_tick} source={'/tick.png'}></Image>
                </View>
                <Text style={[styles.font, styles.exp_org]}>
                  {e.organization}
                </Text>
              </View>
            ))}
          </View>
        </View>
        {/* --------------------------------------------------------------------------- */}
        {/* -----------------------------------SKILLS---------------------------------- */}
        {/* --------------------------------------------------------------------------- */}
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <View style={styles.skills}>
          <View style={styles.skill}>
            <View style={styles.skill_box}>
              <View style={styles.skill_iconc}>
                <Image style={styles.exp_icon} source={'/head.png'}></Image>
              </View>
              <Text style={[styles.font, styles.skill_htext]}>SKILLS</Text>
            </View>
            <View style={styles.skill_line}></View>
          </View>
          <View style={styles.skill_row}>
            {data.skills.map((s, i) => (
              <View style={styles.skill_cont}>
                <View style={styles.svg_cont}>
                  <Svg style={styles.svg}>
                    <Circle
                      cx="19"
                      cy="19"
                      r="16"
                      fill="none"
                      stroke="#e5e5e5"
                      style={styles.skill_circle}
                    />
                    {s.rating == 5 ? (
                      <Circle
                        cx="19"
                        cy="19"
                        r="16"
                        fill="none"
                        stroke="#373D48"
                        style={styles.skill_circle}
                      />
                    ) : (
                      <Path
                        d={circle(s.rating)}
                        stroke="#373D48"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                    )}
                  </Svg>
                </View>
                <View style={styles.skill_namec}>
                  <Text style={[styles.font, styles.skill_name]}>{s.name}</Text>
                  <View style={styles.stars}>
                    {[...new Array(parseInt(s.rating))].map(() => (
                      <Image source={'/stary.png'} style={styles.star}></Image>
                    ))}
                    {[...new Array(5 - parseInt(s.rating))].map(() => (
                      <Image source={'/starb.png'} style={styles.star}></Image>
                    ))}
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
        {/* --------------------------------------------------------------------------- */}
        {/* ------------------------------------PROJECTS------------------------------- */}
        {/* --------------------------------------------------------------------------- */}
        <View style={[styles.exp, { marginTop: 6 }]}>
          <Image source={'/ell2.png'} style={[styles.ell, styles.ell2]}></Image>
          <Image source={'/ell1.png'} style={[styles.ell, styles.ell1]}></Image>
          <View style={styles.exp_iconc}>
            <Image style={styles.exp_icon} source={'/head.png'}></Image>
          </View>
          <Text style={[styles.font, styles.exp_exp]}>Projects</Text>
          {data.projects.map((e, i) => (
            <View style={styles.exp_cont} wrap={false}>
              <View style={styles.exp_titlec}>
                <Link
                  src={e.link}
                  style={[
                    styles.font,
                    styles.exp_title,
                    { textDecoration: 'none' },
                  ]}
                >
                  {e.title}
                </Link>
                <Image
                  style={[styles.exp_tick, { top: 1.5 }]}
                  source={'/tick.png'}
                ></Image>
              </View>
              <Text style={[styles.font, styles.exp_org]}>{e.expertise}</Text>
              {e.description.map((d, i) => (
                <View style={styles.exp_desc}>
                  <View style={styles.exp_cir}></View>
                  <Text
                    style={[styles.font, styles.exp_des, { paddingRight: 90 }]}
                  >
                    {d}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </View>
        {/* --------------------------------------------------------------------------- */}
        {/* --------------------------------------TRAININGS---------------------------- */}
        {/* --------------------------------------------------------------------------- */}
        {data.trainings.length ? (
          <View style={styles.edu}>
            <View style={styles.edu_left}></View>
            <View style={[styles.exp, styles.edu_edu]}>
              <View style={styles.exp_iconc}>
                <Image style={styles.exp_icon} source={'/head.png'}></Image>
              </View>
              <Text style={[styles.font, styles.exp_exp]}>
                COURSES/ TRANINGS
              </Text>
              {data.trainings.map((e, i) => (
                <View style={styles.exp_cont} wrap={false}>
                  <View style={styles.exp_titlec}>
                    <Text style={[styles.font, styles.exp_title]}>
                      {e.title}
                    </Text>
                    <View style={styles.exp_date}>
                      <Image
                        source={'/calender.png'}
                        style={styles.exp_cal}
                      ></Image>
                      <Text style={[styles.font, styles.exp_datet]}>
                        {e.startDate} - {e.endDate}
                      </Text>
                    </View>
                    <Image style={styles.exp_tick} source={'/tick.png'}></Image>
                  </View>
                  <Text style={[styles.font, styles.exp_org]}>
                    {e.organization}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ) : null}
        <Text> </Text>
        {/* --------------------------------------------------------------------------- */}
        {/* ------------------------------HOBBY/INTEREST/LANG-------------------------- */}
        {/* --------------------------------------------------------------------------- */}
        <View style={styles.hobby} wrap={false}>
          {data.hobbies.length > 0 && (
            <View style={styles.hobby_hobbyc}>
              <View style={{ ...styles.hobby_hobby, height: 150 }}>
                {data.hobbies.map((h) => (
                  <View style={[styles.font, styles.hobby_item]}>
                    <Text style={styles.hobby_text}>{h}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.hobby_hobbytc}>
                <View style={styles.skill_box}>
                  <View style={styles.skill_iconc}>
                    <Image style={styles.exp_icon} source={'/head.png'}></Image>
                  </View>
                  <Text style={[styles.font, styles.skill_htext]}>HOBBIES</Text>
                </View>
              </View>
            </View>
          )}
          {data.interests.length > 0 && (
            <View style={styles.hobby_hobbyc}>
              <View style={{ ...styles.hobby_hobby, height: 150 }}>
                {data.interests.map((h) => (
                  <View style={[styles.font, styles.hobby_item]}>
                    <Text style={styles.hobby_text}>{h}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.hobby_hobbytc}>
                <View style={styles.skill_box}>
                  <View style={styles.skill_iconc}>
                    <Image style={styles.exp_icon} source={'/head.png'}></Image>
                  </View>
                  <Text style={[styles.font, styles.skill_htext]}>
                    INTERESTS
                  </Text>
                </View>
              </View>
            </View>
          )}
          {data.languages.length > 0 && (
            <View style={[styles.hobby_hobbyc, { marginRight: 0 }]}>
              <View style={{ ...styles.hobby_hobby, height: 150 }}>
                {data.languages.map((h) => (
                  <View style={[styles.font, styles.hobby_item]}>
                    <Text style={styles.hobby_text}>{h}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.hobby_hobbytc}>
                <View style={styles.skill_box}>
                  <View style={styles.skill_iconc}>
                    <Image style={styles.exp_icon} source={'/head.png'}></Image>
                  </View>
                  <Text style={[styles.font, styles.skill_htext]}>
                    LANGUAGES
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        {/* --------------------------------------------------------------------------- */}
        {/* ----------------------------------CERTIFICATES----------------------------- */}
        {/* --------------------------------------------------------------------------- */}
        <View style={styles.exp}>
          <View style={styles.exp_iconc}>
            <Image style={styles.exp_icon} source={'/head.png'}></Image>
          </View>
          <Text style={[styles.font, styles.exp_exp]}>Certification</Text>
          {data.certificates.map((e, i) => (
            <View style={styles.exp_cont} wrap={false}>
              <View style={styles.exp_titlec} wrap={false}>
                <Text style={[styles.font, styles.exp_title]}>{e.title}</Text>
                <View style={styles.exp_date}>
                  <Image
                    source={'/calender.png'}
                    style={styles.exp_cal}
                  ></Image>
                  <Text style={[styles.font, styles.exp_datet]}>
                    {e.startDate} - {e.endDate}
                  </Text>
                </View>
                <Image style={styles.exp_tick} source={'/tick.png'}></Image>
              </View>
              <View style={styles.certificate_cont}>
                {e.images.map((img) => (
                  <Image src={img} style={styles.certificate}></Image>
                ))}
              </View>
            </View>
          ))}
        </View>
        {/* --------------------------------------------------------------------------- */}
        {/* ----------------------------------REFERENCES------------------------------- */}
        {/* --------------------------------------------------------------------------- */}
        <View style={styles.ref}>
          <View style={styles.ref_left}>
            <Image style={[styles.el, styles.el1]} src={'/el1.png'}></Image>
            <Image style={[styles.el, styles.el2]} src={'/el2.png'}></Image>
          </View>
          <View style={styles.ref_right}>
            <View style={styles.skill_box}>
              <View style={styles.skill_iconc}>
                <Image style={styles.exp_icon} source={'/head.png'}></Image>
              </View>
              <Text style={[styles.font, styles.skill_htext]}>REFERENCES</Text>
            </View>
            {data.references.map((r, i) => (
              <View
                style={[
                  styles.ref_ref,
                  i == data.references.length - 1
                    ? { borderBottomWidth: 0 }
                    : {},
                ]}
                wrap={false}
              >
                <View style={[styles.ref_row, { margin: '0 auto' }]}>
                  <Text
                    style={[styles.font, styles.ref_text1]}
                  >{`${r.name}, `}</Text>
                  <Text
                    style={[styles.font, styles.ref_text2]}
                  >{`${r.job}, `}</Text>
                  <Text
                    style={[styles.font, styles.ref_text2]}
                  >{`${r.company}`}</Text>
                </View>
                <View style={[styles.ref_row, { margin: '0 auto' }]}>
                  <View style={[styles.ref_row, { marginRight: 40 }]}>
                    <Text style={[styles.font, styles.ref_text3]}>
                      Contact:{' '}
                    </Text>
                    <Text style={[styles.font, styles.ref_text4]}>{r.tel}</Text>
                  </View>
                  <View style={styles.ref_row}>
                    <Text style={[styles.font, styles.ref_text3]}>Email: </Text>
                    <Text style={[styles.font, styles.ref_text4]}>
                      {r.email}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}
