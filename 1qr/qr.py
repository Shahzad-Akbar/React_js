import qrcode
import json
from cryptography.fernet import Fernet

# Generate a key for encryption
key = Fernet.generate_key()
cipher = Fernet(key)

# Journey data to encode
ticket_data = {
    'transaction_id': '1234567890',
    'source_station': 'Jahangirpuri',
    'destination_station': 'Noida Sector 16',
    'fare': 50,
    'timestamp': '2024-06-14T12:00:00',
    'validity_period': '2 hours'
}

# Convert data to JSON
ticket_data_json = json.dumps(ticket_data)

# Encrypt the data
encrypted_data = cipher.encrypt(ticket_data_json.encode())

# Generate the QR code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=8,
    border=4,
)
qr.add_data(encrypted_data)
qr.make(fit=True)

img = qr.make_image(fill='black', back_color='white')
img.save("1ticket_qr.png")

# Save the encryption key to a file for decryption later
with open("encryption_key.key", "wb") as key_file:
    key_file.write(key)

print("QR code generated and saved as ticket_qr.png")
print("Encryption key saved as encryption_key.key")
