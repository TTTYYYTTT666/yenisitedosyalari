from PIL import Image

def remove_background(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    for item in datas:
        # Check if the pixel is white (or very close to white)
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))  # Transparent
        else:
            new_data.append(item)

    img.putdata(new_data)
    img.save(output_path, "PNG")
    print("Cleaned logo saved to", output_path)

if __name__ == "__main__":
    remove_background(
        "c:/Users/dexax/Desktop/kronikne-main/kronikne-main/public/logo.png",
        "c:/Users/dexax/Desktop/kronikne-main/kronikne-main/public/logo-transparent.png"
    )
