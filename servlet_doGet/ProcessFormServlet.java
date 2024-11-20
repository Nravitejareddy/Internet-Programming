import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class ProcessFormServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Set the response content type
        response.setContentType("text/html");

        // Get the request parameters (form data)
        String username = request.getParameter("username");
        String gender = request.getParameter("gender");
        String[] hobbies = request.getParameterValues("hobby");
        String country = request.getParameter("country");

        // Get the print writer to write the response
        PrintWriter out = response.getWriter();

        // Write HTML content to the response
        out.println("<html><body>");
        out.println("<h2>Form Submission Details</h2>");

        // Display the received parameters
        out.println("<p><b>Name:</b> " + (username != null ? username : "Not provided") + "</p>");
        out.println("<p><b>Gender:</b> " + (gender != null ? gender : "Not selected") + "</p>");

        if (hobbies != null && hobbies.length > 0) {
            out.println("<p><b>Hobbies:</b> ");
            for (String hobby : hobbies) {
                out.println(hobby + " ");
            }
            out.println("</p>");
        } else {
            out.println("<p><b>Hobbies:</b> None selected</p>");
        }

        out.println("<p><b>Country:</b> " + (country != null ? country : "Not selected") + "</p>");

        out.println("</body></html>");
    }
}
