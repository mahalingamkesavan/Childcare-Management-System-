import { Row, Col, Image } from "antd";
import React, { useEffect } from "react";
import GetActiveChildCount from "../Components/Enrollment-Data/GetActiveChildCount";
import { Link } from "react-router-dom";
import adoption from "./img/adoption.jpg";

const Home = () => {

  var count = GetActiveChildCount();   

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Total Children's -{count}</h1>
      </div>
      <Row gutter={[30, 30]}>
        <Col>
          <Image
            width={1000}
            src={adoption}
          />
        </Col>

        <Col span={12}>
          <hr></hr>
          <h1>How the Child Welfare System Works</h1>
          <p>
            {" "}
            The child welfare system is not a single entity. Many organizations
            in each community work together to strengthen families and keep
            children safe. Public agencies, such as departments of social
            services or child and family services, often contract and
            collaborate with private child welfare agencies and community-based
            organizations to provide services to families, such as in-home
            family preservation services, foster care, residential treatment,
            mental health care, substance use treatment, parenting skills
            classes, domestic violence services, employment assistance, and
            financial or housing assistance. Child welfare systems are complex,
            and their specific procedures vary widely by State. The purpose of
            this factsheet is to give a brief overview of the purposes and
            functions of child welfare from a national perspective.
          </p>
          <hr></hr>
          The Child Abuse Prevention and Treatment Act The Child Abuse
          Prevention and Treatment Act (CAPTA), originally passed in 1974,
          brought national attention to the need to protect vulnerable children
          in the United States. CAPTA provides Federal funding to States in
          support of the prevention, assessment, investigation, and prosecution
          of child abuse and neglect as well as grants to public agencies and
          nonprofit organizations for demonstration programs and projects. Since
          it was signed into law, CAPTA has been amended several times, most
          recently by the CAPTA Reauthorization Act of 2010 (P.L. 111–320). For
          more information, see Information Gateway’s About CAPTA: A Legislativ
          <hr></hr>
        </Col>

        <Col span={12}>
          <hr></hr>
          <h1>WHAT IS THE CHILD WELFARE SYSTEM? </h1>
          <p>
            The child welfare system is a group of services designed to promote
            the well-being of children by ensuring safety, achieving permanency,
            and strengthening families. While the primary responsibility for
            child welfare services rests with the States, the Federal Government
            supports States through program funding and legislative initiatives.
            The Children's Bureau within the U.S. Department of Health and Human
            Services' Administration for Children and Families holds the primary
            responsibility for implementing Federal child and family
            legislation. The Children's Bureau works with State and local
            agencies to develop programs that focus on preventing child abuse
            and neglect by strengthening families, protecting children from
            further maltreatment, reuniting children safely with their families,
            and finding permanent families for children who cannot safely return
            home. For more information on child welfare legislation and policy,
            see Child Welfare Information Gateway's Major Federal Legislation
            Concerned With Child Protection, Child Welfare, and Adoption. For
            more on how child welfare programs are funded, see Information
            Gateway's Funding web section. Most families first become involved
            with the child welfare system because of a report of suspected child
            abuse or neglect, which is also referred to as "child maltreatment."
            Child maltreatment is defined by CAPTA as serious harm (e.g.,
            physical abuse, sexual abuse, emotional abuse, neglect) caused to
            children by parents or primary caregivers, such as extended family
            members or babysitters.Child
          </p>
          <hr></hr>
        </Col>
        <h1>How the Child Welfare System Works</h1>
        <p>
          The Child Abuse Prevention and Treatment Act The Child Abuse
          Prevention and Treatment Act (CAPTA), originally passed in 1974,
          brought national attention to the need to protect vulnerable children
          in the United States. CAPTA provides Federal funding to States in
          support of the prevention, assessment, investigation, and prosecution
          of child abuse and neglect as well as grants to public agencies and
          nonprofit organizations for demonstration programs and projects. Since
          it was signed into law, CAPTA has been amended several times, most
          recently by the CAPTA Reauthorization Act of 2010 (P.L. 111–320). For
          more information, see Information Gateway’s About CAPTA: A Legislativ
        </p>
        <Col span={12}>
          <h1>How the Child Welfare System Works</h1>
          <p>
            <span></span> This factsheet provides a brief overview of the
            purposes and functions of the child welfare system. Child welfare
            systems typically receive and investigate reports of possible child
            abuse and neglect; provide services to families that need assistance
            in the safety and care of their children; arrange for children to
            live with relatives or with foster families when they are not safe
            at home; and arrange for reunification, adoption, or other permanent
            family connections for children and youth leaving foster care. A
            flowchart illustrates how cases typically move through the child
            welfare system.
          </p>
        </Col>
        <Col>
          <img
            width={400}
            style={{ display: "flex" }}
            src="https://images.socialwelfare.library.vcu.edu/files/theme_uploads/055614654318a14206b9d2aa7d5323cf.png"
          />
          <p> The Child Abuse Prevention and Treatment Act The Child Abus</p>
        </Col>
      </Row>
      <Row
        style={{ backgroundColor: "black", color: "white" }}
        gutter={[20, 20, 20]}
      >
        <Col
          style={{ textAlign: "center", marginBottom: 15, marginTop: 40 }}
          span={8}
        >
          <h1>
            <Link to="/home" style={{ color: "White" }}>
              Home
            </Link>
          </h1>
          <h1>
            <Link to="/home" style={{ color: "White" }}>
              People
            </Link>
          </h1>
          <h1>Events</h1>
          <h1>Organizations</h1>
          <h1>Programs</h1>
          <h1>Eras</h1>
          <h1>Recollections</h1>
          <h1>Issues</h1>
          <h1>People List</h1>
          <h1>About</h1>
        </Col>
        <Col style={{ marginBottom: 15, marginTop: 40 }} span={8}>
          <h1 style={{ textAlign: "center", fontWeight: "bold" }}>More</h1>
          <h1></h1>
          <h1 style={{ fontWeight: "bold", alignSelf: "revert-layer" }}>
            Explore historical materials related to the history of social reform
            at VCU Libraries’ Image Portal.
          </h1>

          <h1>POLICIES & HELPFUL LINKS</h1>
          <p style={{ alignItems: "center" }}>
            Disclaimer and Policies Privacy Policy Accessibility FOIA requests
            No FEAR Act data Office of the Inspector General Performance reports
            Vulnerability Disclosure Policy USA.gov Download Acrobat Reader
          </p>
        </Col>
        <Col span={8}>
          <h1
            style={{ fontWeight: "bold", marginTop: 50, textAlign: "center" }}
          >
            Staus
          </h1>
          <img
            width={300}
            style={{ display: "flex" }}
            src={"https://tpc.googlesyndication.com/simgad/9745413772195929478"}
          ></img>
        </Col>
      </Row>
    </div>
  );
};
export default Home;
