<script>
    document.querySelectorAll(".faq-question").forEach((button) => {
        button.addEventListener("click", () => {
            const answer = button.nextElementSibling;
            button.classList.toggle("active");
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });
</script>
