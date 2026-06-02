import { Html, Body, Container, Heading, Text } from "@react-email/components";

type Props = {
  fullName: string;
  email: string;
  businessName?: string;
  phone?: string;
  services?: string[];
  message: string;
};

export default function ConsultationAdminEmail({
  fullName,
  email,
  businessName,
  phone,
  services,
  message,
}: Props) {
  return (
    <Html>
      <Body>
        <Container>
          <Heading>New Consultation Request</Heading>
          <Text>Name: {fullName}</Text>
          <Text>Email: {email} </Text>
          {phone && <Text>Phone Numer: {phone} </Text>}
          {businessName && <Text>Business Name: {businessName} </Text>}

          {services?.map((service) => (
            <Text key={service}>• {service}</Text>
          ))}

          <Text>Message: {message} </Text>
        </Container>
      </Body>
    </Html>
  );
}
