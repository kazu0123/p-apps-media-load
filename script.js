const number_max_input = document.getElementById("number_max_input");
const reading_mode_input = document.getElementById("reading_mode_input");
const reading_speed_input = document.getElementById("reading_speed_input");
const page_id_input = document.getElementById("page_id_input");
const output_area = document.getElementById("output_area");

function genText() {
    const readingMode = reading_mode_input.value;
    const readingSpeed = reading_speed_input.value;
    const pageId = page_id_input.value;

    const numberMax = parseInt(number_max_input.value, 10);

    let outputText = "";

    Array.from({length: numberMax}).forEach((_, index) => {
        const fileNumber = index + 1;
        const fileName = `${pageId}_${readingMode}_${fileNumber}_${readingSpeed}`;
        outputText += fileName + ";";
    });

    output_area.value = outputText;
}
