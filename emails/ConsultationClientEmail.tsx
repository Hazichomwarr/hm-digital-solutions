import { Html, Body, Container, Heading, Text } from "@react-email/components";

type Props = {
  fullName: string;
};

export default function ConsultationClientEmail({ fullName }: Props) {
  return (
    <Html>
      <Body>
        <Container>
          <Heading>Thank You for Contacting HM Digital Solutions</Heading>
          <Text>Hello ${fullName},</Text>
          <Text>
            We have received your consultation request and will review it
            shortly. A member of our team will contact you within 24 hours.{" "}
          </Text>

          <Text>
            {" "}
            We appreciate the opportunity to learn about your business.{" "}
          </Text>

          <Text>— HM Digital Solutions</Text>
        </Container>
      </Body>
    </Html>
  );
}
