resource "aws_security_group" "allow_tls" {
  provider = aws.primary
  name        = "Security_01"
  description = "Allow SSH & HTTP inbound traffic"
  ingress {
    description = "allowing HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]

  }
  ingress {
    description = "allowing SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  tags = {
    Name = "Security_01"
  }
}
output "sec_op"{
  value = aws_security_group.allow_tls.name
}