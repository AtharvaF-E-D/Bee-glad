import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mt-20">
      <Container>
        <div className="flex justify-between">
          <div>
            <h2 className="text-white text-lg font-semibold">BeeGlad</h2>
            <p className="text-sm mt-2">
              Living Innovation
            </p>
          </div>

          <div className="text-sm">
            © {new Date().getFullYear()} BeeGlad. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
