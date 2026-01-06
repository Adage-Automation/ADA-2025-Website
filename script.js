// Mouse gradient effect
const mouseGradient = document.getElementById('mouseGradient');
let mouseX = 0;
let mouseY = 0;
let gradientX = 0;
let gradientY = 0;

// Thunder icon and ball attraction
const thunderIcon = document.querySelector('.logo-icon');
let iconOffsetX = 0;
let iconOffsetY = 0;
let isAttracted = false;

// Store the original icon position
let iconBaseX = 0;
let iconBaseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Get the icon's base position (without transform offset)
    const iconRect = thunderIcon.getBoundingClientRect();
    iconBaseX = iconRect.left + iconRect.width / 2 - iconOffsetX;
    iconBaseY = iconRect.top + iconRect.height / 2 - iconOffsetY;
    
    const distance = Math.sqrt((mouseX - iconBaseX) ** 2 + (mouseY - iconBaseY) ** 2);
    
    if (distance < 150) {
        isAttracted = true;
        iconOffsetX += (mouseX - iconBaseX) * 0.1;
        iconOffsetY += (mouseY - iconBaseY) * 0.1;
        
        // Limit the offset to prevent excessive movement
        iconOffsetX = Math.max(-50, Math.min(50, iconOffsetX));
        iconOffsetY = Math.max(-50, Math.min(50, iconOffsetY));
    } else {
        isAttracted = false;
        iconOffsetX *= 0.95;
        iconOffsetY *= 0.95;
    }
});

document.addEventListener('mouseenter', () => {
    mouseGradient.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    mouseGradient.style.opacity = '0';
});

function animate() {
    // When attracted, ball moves together with thunder icon
    if (isAttracted) {
        // Ball follows the same offset as the thunder icon (moves together)
        gradientX += (iconBaseX + iconOffsetX - gradientX) * 0.2;
        gradientY += (iconBaseY + iconOffsetY - gradientY) * 0.2;
    } else {
        gradientX += (mouseX - gradientX) * 0.15;
        gradientY += (mouseY - gradientY) * 0.15;
    }
    
    mouseGradient.style.left = gradientX + 'px';
    mouseGradient.style.top = gradientY + 'px';
    
    // Animate thunder icon
    thunderIcon.style.transform = `translate(${iconOffsetX}px, ${iconOffsetY}px)`;
    
    requestAnimationFrame(animate);
}
animate();

// Matrix effect for loading overlay
function initMatrixEffect() {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const gradient = ctx.createLinearGradient(0, drops[i] * fontSize, 0, (drops[i] + 10) * fontSize);
            gradient.addColorStop(0, '#60a5fa');
            gradient.addColorStop(0.5, '#a78bfa');
            gradient.addColorStop(1, 'rgba(96, 165, 250, 0)');
            
            ctx.fillStyle = gradient;
            
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    let matrixInterval;
    return {
        start: () => {
            matrixInterval = setInterval(drawMatrix, 33);
        },
        stop: () => {
            clearInterval(matrixInterval);
        }
    };
}

// Project data
const projectData = {
    'acmg': {
        title: 'Quotation Tracking for ACMG and CSD',
        subtitle: 'Centralized Odoo-based system to manage inquiries, quotations, orders, and reports for ACMG and regional sales teams.',
        sections: [
            {
                title: 'Overview',
                content: 'The quotation tracking system was the first fully Odoo‑based workflow implemented for the sales and ACMG teams, replacing the old Excel‑driven process with a shared cloud workspace for managing quotations in real time. It centralizes every quote in a single platform where team members can collaborate, update status, and immediately see which opportunities are open, won, or lost without juggling multiple files. Built‑in reporting and filtering allow users to generate up‑to‑date performance and pipeline reports in seconds, eliminating the manual effort of sorting spreadsheets and compiling data for hours.'
            },
            // {
            //     title: 'Project Gallery',
            //     type: 'gallery',
            //     images: [
            //         { src: 'https://via.placeholder.com/600x400?text=Product+Image+1', alt: 'Product Image 1' },
            //         { src: 'https://via.placeholder.com/600x400?text=Product+Image+2', alt: 'Product Image 2' },
            //         { src: 'https://via.placeholder.com/600x400?text=Product+Image+3', alt: 'Product Image 3' }
            //     ]
            // },
            {
                title: 'Project Documentation',
                type: 'pdf',
                url: 'ADA Projects 2025/Quotation Tracking/Creating New Records.pdf'
            },
            {
                title: 'Live Dashboard',
                type: 'dashboard',
                url: 'https://adage-automation.odoo.com/dashboard/share/19/b27a00ca-de13-454b-941b-631f75001a59'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '👨‍💼', name: 'ACMG TEAM' },
                    { icon: '👨‍💼', name: 'CSD TEAM' },
                    { icon: '👨‍💼', name: 'AKAI & AKIC' },
                    { icon: '👨‍💼', name: 'Regional Sales' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: '100% quotations from Adage Regional Sales are routed through Odoo'
            }
        ]
    },
    'sales-crm': {
        title: 'CRM Management for Sales Team',
        subtitle: 'Customer relationship module to record leads, follow-ups, and interactions for regional sales and exhibitors.',
        sections: [
            {
                title: 'Overview',
                content: 'The CRM software was introduced specifically for the regional sales team to capture potential orders and enquiries instantly during customer visits or exhibitions, ensuring no interaction is forgotten. It enables quick logging of customer details, follow-up notes, and scheduled reminders, allowing sales reps to reconnect later and probe for specific requirements without relying on memory or scattered notes. This integration with the sales module lets any team member search for customers, view interaction history, and directly link them to existing quotations for seamless tracking and conversion.'
            },
            {
                title: 'Project Gallery',
                type: 'gallery',
                images: [
                    { src: 'ADA Projects 2025/CRM Module for Sales/CRM Form View.png', alt: 'CRM Form View' }
                ]
            },
            {
                title: 'Project Documentation',
                type: 'pdf',
                url: 'ADA Projects 2025\\CRM Module for Sales\\Creating New Records on CRM Module.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '👨‍💼', name: 'Regional Sales Team' },
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Regional Sales yet to Adopt it fully'
            }
        ]
    },
    'csd': {
        title: 'Odoo for CSD (Sales)',
        subtitle: 'Specialized solution for Customer Service Division sales',
        sections: [
            {
                title: 'Overview',
                content: 'Odoo for CSD is specifically tailored to meet the unique requirements of service-based sales. This custom Odoo implementation includes specialized workflows, pricing structures, and reporting capabilities designed for the Customer Service Division\'s business model.'
            },
            {
                title: 'Project Gallery',
                type: 'gallery',
                images: [
                    { src: 'https://via.placeholder.com/600x400?text=CSD+Sales+Dashboard', alt: 'CSD Sales Dashboard' },
                    { src: 'https://via.placeholder.com/600x400?text=Customer+Service+Workflow', alt: 'Customer Service Workflow' },
                    { src: 'https://via.placeholder.com/600x400?text=Service+Pricing+Structure', alt: 'Service Pricing Structure' }
                ]
            },
            {
                title: 'Project Documentation',
                type: 'pdf',
                url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Account Executives' },
                    { icon: '📋', name: 'Operations Team' },
                    { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'CSD has achieved 45% faster quote generation, 25% improvement in contract renewal rates, and significantly enhanced customer retention through better service tracking and proactive engagement.'
            }
        ]
    },
    'service-rfq': {
        title: 'Service Engineers RFQ Portal',
        subtitle: 'Portal for service engineers to raise, track, and manage RFQs for spare parts and services.',
        sections: [
            {
                title: 'Overview',
                content: 'The RFQ Portal for Service Engineers provides a dedicated web form accessible via login on the adage-automation.in portal, allowing engineers to submit RFQ details instantly from mobile devices anywhere. Entries sync directly to the sales module, triggering notifications to the CSD Team at head office while offering engineers a clean dashboard to track submission status and completion rates. This replaces manual email checks and data entry for CSD, enabling faster quote generation, better monitoring of pending requests, and reduced turnaround times overall.'
            },
            {
                title: 'Project Gallery',
                type: 'gallery',
                images: [
                    { src: 'ADA Projects 2025/Service RFQ Portal/RFQ Form.png', alt: 'RFQ Portal Interface' },
                    { src: 'ADA Projects 2025/Service RFQ Portal/RFQ Dashboard.png', alt: 'RFQ Dashboard' },
                    { src: 'ADA Projects 2025/Service RFQ Portal/Editing an existing RFQ.png', alt: 'Editing Existing RFQ through the portal' }
                ]
            },
            {
                title: 'Project Video',
                type: 'video',
                content: '<video controls style="width: 100%; height: auto;"><source src="ADA Projects 2025/Service RFQ Portal/service rfq.webm" type="video/webm"></video>'
            },
            // {
            //     title: 'Project Documentation',
            //     type: 'pdf',
            //     url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            // },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '🛠️', name: 'Service Engineers' },
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Being Utilized - 62 number of RFQs from Field'
            }
        ]
    },
    'safety': {
        title: 'Safety Meetings Module for Shopfloor',
        subtitle: 'Custom module to record and review shopfloor safety meetings for various units across India',
        sections: [
            {
                title: 'Overview',
                content: 'The Safety Meetings module is a custom Odoo module developed from scratch to automate the generation of mandatory reports required for factory inspections and internal audits, ensuring compliance without manual compilation. It supports shopfloor teams in discussing daily safety measures, personal precautions, and day plans, while capturing requests for requirements and recording all details in a structured format. The module produces digitally signed reports shared via email to designated recipients, replacing paper-based processes with a fully traceable, auditable digital workflow.'
            },
            {
                title: 'Project Gallery',
                type: 'gallery',
                images: [
                    { src: 'ADA Projects 2025/Safety Meetings/Digital Signature Interface.png', alt: 'Digital Signature Interface' },
                    { src: 'ADA Projects 2025/Safety Meetings/Interface.png', alt: 'Safety Meetings Form' },
                ]
            },
            {
                title: 'Project Video',
                type: 'video',
                content: '<video controls style="width: 100%; height: auto;"><source src="ADA Projects 2025/Safety Meetings/Safety Meetings.webm" type="video/webm"></video>'
            },
            {
                title: 'Project Documentation',
                type: 'pdf',
                url: 'ADA Projects 2025/Safety Meetings/Sample Report.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '🔧', name: 'Shopfloor' },
                    { icon: '🏭', name: 'Plant Sites' },
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Being utilized daily by Unit 1 & Unit 2 Shopfloors. Launched in plant sites'
            }
        ]
    },
    'quotation': {
        title: 'Quotation Generation from Odoo',
        subtitle: 'Intelligent system for professional quotation creation',
        sections: [
            {
                title: 'Overview',
                content: 'The Quotation Generation system (yet to launch) will revolutionize how quotations are created and managed. By pulling data directly from Odoo, this system will generate professional, branded quotations with accurate pricing, terms, and conditions in minutes instead of hours.'
            },
            {
                title: 'Project Gallery',
                type: 'gallery',
                images: [
                    { src: 'https://via.placeholder.com/600x400?text=Quotation+Template+Designer', alt: 'Quotation Template Designer' },
                    { src: 'https://via.placeholder.com/600x400?text=Automated+Pricing+Engine', alt: 'Automated Pricing Engine' },
                    { src: 'https://via.placeholder.com/600x400?text=Quote+Approval+Workflow', alt: 'Quote Approval Workflow' }
                ]
            },
            {
                title: 'Project Documentation',
                type: 'pdf',
                url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            },
            {
                title: 'Utilized by',
                utilized: [
                    { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Account Executives' },
                    { icon: '📋', name: 'Operations Team' },
                    { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'We anticipate 80% reduction in quotation preparation time, elimination of pricing errors, consistent professional formatting across all quotes, and improved win rates through faster response times to customer requests.'
            }
        ]
    },
    'dew-bubble': {
        title: 'Dew Point & Bubble Point Calculator',
        subtitle: 'Automatic calculations of dew point and bubble point values from the datasheet composition table.',
        sections: [
            {
                title: 'Overview',
                content: 'This automates dew point and bubble point calculations by automatically preparing the required data and running the calculations. It checks the input data for correctness and generates separate result files for each case.\n\nBy removing manual steps, it saves time, reduces errors, and makes the entire calculation process faster, smoother, and more reliable.'
            },
            // {
            //     title: 'Project Gallery',
            //     type: 'gallery',
            //     images: [
            //         { src: 'https://via.placeholder.com/600x400?text=Thermodynamic+Calculator+Interface', alt: 'Thermodynamic Calculator Interface' },
            //         { src: 'https://via.placeholder.com/600x400?text=Phase+Equilibrium+Chart', alt: 'Phase Equilibrium Chart' },
            //         { src: 'https://via.placeholder.com/600x400?text=Process+Design+Output', alt: 'Process Design Output' }
            //     ]
            // },
            {
                title: 'Project Documentation',
                type: 'pdf',
                url: 'ADA Projects 2025/Dew Point & Bubble Point Calculator/Dew Point & Bubble Point/User Guide - Dew Point & Bubble Point Calculation.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    // { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'ACMG Teams' },
                    // { icon: '📋', name: 'Operations Team' },
                    // { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Utilized by ACMG 1 & 2. Utlized for 6 number of projects performed so far'
            }
        ]
    },
    'lag-pressure': {
        title: 'Pressure Drop and Lag time Calculator',
        subtitle: 'Automatic calculations for Pressure Drop & Lag Time for various flow rates.',
        sections: [
            {
                title: 'Overview',
                content: 'This automates the calculation of lag time and pressure drop by taking input data from an Excel sheet, running the required calculations automatically, and writing the results back into a final output file.\nIt removes the need to manually enter data and calculate results row by row, saving a significant amount of time, reducing effort, and minimizing human errors, especially when working with large datasets.'
            },
            // {
            //     title: 'Project Gallery',
            //     type: 'gallery',
            //     images: [
            //         { src: 'https://via.placeholder.com/600x400?text=Pipeline+Analysis+Tool', alt: 'Pipeline Analysis Tool' },
            //         { src: 'https://via.placeholder.com/600x400?text=Pressure+Drop+Calculator', alt: 'Pressure Drop Calculator' },
            //         { src: 'https://via.placeholder.com/600x400?text=System+Dynamics+Visualization', alt: 'System Dynamics Visualization' }
            //     ]
            // },
            {
                title: 'Project Documentation',
                type: 'pdf',
                url: 'ADA Projects 2025/Pressure Time and Lag Time/Pressure Drop and Lag time Calculator/Lag Time & Pressure Drop Calculation/User Guide - Lag Time & Pressure Drop Calculation.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    // { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'ACMG Team' },
                    // { icon: '📋', name: 'Operations Team' },
                    // { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Utilized by ACMG 1 & 2.'
            }
        ]
    },
    'auction': {
        title: 'Adage Day Live Auction Software',
        subtitle: 'Real-time auction platform used by event organizers during Adage Day to manage bids and results.',
        sections: [
            {
                title: 'Overview',
                content: 'The Adage Day Live Auction software was developed entirely from scratch using Python as a custom web application tailored to the managing committee\'s requirements.\n\nIt features three parallel real-time screens: one displaying the current bidder\'s photo, another showing bidder details and live bid amounts to the team captains, and a third generating results directly in Excel format for easy export.\n\nThis intuitive, user-friendly solution marked the team\'s first fully indigenous software, replacing manual auction methods using excel sheets and other third party applications with seamless, synchronized bidding and instant result capture.'
            },
            {
                title: 'Project Gallery',
                type: 'gallery',
                images: [
                    { src: 'ADA Projects 2025/Adage Day Live Auction Software/auction ss1.PNG', alt: 'Live Bidding Screen Backend' },
                    { src: 'ADA Projects 2025/Adage Day Live Auction Software/auction ss2.PNG', alt: 'Live Bidding Screen Frontend' },
                    { src: 'ADA Projects 2025/Adage Day Live Auction Software/auction ss3.PNG', alt: 'Team Ledger Backend' },
                    { src: 'ADA Projects 2025/Adage Day Live Auction Software/auction ss4.PNG', alt: 'Auction Result Interface' }
                ]
            },
            {
                title: 'Project Documentation',
                type: 'pdf',
                url: 'ADA Projects 2025/Adage Day Live Auction Software/Auction App Document.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    // { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Event Organizers' },
                    // { icon: '📋', name: 'Operations Team' },
                    // { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Utilized for Adage Day 2025'
            }
        ]
    },
    'foresy': {
        title: 'Foresy Software',
        subtitle: 'Foresy is the most user-friendly way for plant operators to monitor, maintain, and report on industrial gas analyzers from a single, centralized interface',
        sections: [
            {
                title: 'Overview',
                content: 'Foresy is a user-friendly, browser-based application designed to monitor, maintain, and report on industrial gas analyzers from a single, centralized interface. \nIt helps users view live measurements, understand system status, respond to alarms, and carry out routine operational and maintenance activities with confidence. \Foresy builds a strong data foundation for deeper diagnostics, predictive insights and pro-active maintenance.'
            },
            // {
            //     title: 'Project Gallery',
            //     type: 'gallery',
            //     images: [
            //         { src: 'https://via.placeholder.com/600x400?text=Data+Acquisition+Interface', alt: 'Data Acquisition Interface' },
            //         { src: 'https://via.placeholder.com/600x400?text=ML+Analytics+Dashboard', alt: 'ML Analytics Dashboard' },
            //         { src: 'https://via.placeholder.com/600x400?text=Performance+Insights+Report', alt: 'Performance Insights Report' }
            //     ]
            // },
            {
                title: 'Project Documentation',
                type: 'pdf',
                url: 'ADA Projects 2025/Foresy/Foresy.pdf'
            },
            {
                title: 'Utilized by',
                utilized: [
                    { icon: '👥', name: 'Customers' },
                    { icon: '👨‍💼', name: 'Internal Team' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Completed FAT and to be commissioned at IBN ZAHR, Saudi Arabia. Ready for launch across all projects'
            }
        ]
    },
    'sap-search': {
        title: 'SAP Smart Item Search',
        subtitle: 'Utility to quickly search and retrieve item details from SAP for daily use by all teams without need of logging into SAP',
        sections: [
            {
                title: 'Overview',
                content: 'The SAP Item Search is a custom-built application leveraging reasoning models and LLMs to create an intuitive, searchable platform for product codes and item descriptions.\n\nUsers can log in from anywhere via internet hosting to instantly retrieve all required details without accessing SAP directly or contacting head office.\n\nThis eliminates login barriers and support requests, providing fast, self-service access to SAP data and streamlining daily operations across teams.'
            },
            {
                title: 'Project Gallery',
                type: 'gallery',
                images: [
                    { src: 'ADA Projects 2025/SAP Item Search/SAP Item Search Tool/SAP_APP_DFD.PNG', alt: 'SAP App DFD' }
                ]
            },
            {
                title: 'Project Video',
                type: 'video',
                content: '<video controls style="width: 100%; height: auto;"><source src="ADA Projects 2025/SAP Item Search/SAP Item Search Tool/SAP App Recording .mp4" type="video/mp4"></video>'
            },
            {
                title: 'Project Documentation',
                type: 'pdf',
                url: 'ADA Projects 2025/SAP Item Search/SAP Item Search Tool/Logic Flow Diagram.pdf'
            },
            {
                title: 'Utilized by',
                utilized: [
                    { icon: '👥', name: 'Everyone' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'To be launched in Jan 2026'
            }
        ]
    },
    'newsletter': {
        title: 'Adage Connect Newsletter',
        subtitle: 'Distribute the monthly Adage Connect newsletter to all employees using Email Marketing module.',
        sections: [
            {
                title: 'Overview',
                content: 'The Adage Connect Newsletter initiative, launched in September 2024, delivers monthly updates on the top 5 major activities and company news to keep employees and stakeholders informed.\n\nLeveraging Odoo\'s Email Marketing module, the team has successfully published over 15 editions with strong response rates, ensuring consistent communication about key events and developments.\n\nThis automated, visually appealing format replaced sporadic announcements with a reliable monthly touchpoint, boosting engagement and company-wide awareness directlly to the email inbox.'
            },
            {
                title: 'Project Gallery',
                type: 'gallery',
                images: [
                    { src: 'ADA Projects 2025\\Adage Montly Newsletter\\Email Marketing Interface.png', alt: 'Email Marketing Interface' },
                    { src: 'ADA Projects 2025\\Adage Montly Newsletter\\How it looks in the inbox.png', alt: 'Email Inbox View' },
                    { src: 'ADA Projects 2025\\Adage Montly Newsletter\\Detailed Reporting of the Emails send.png', alt: 'Detailed Reporting of the Emails send' }
                ]
            },
            // {
            //     title: 'Project Documentation',
            //     type: 'pdf',
            //     url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            // },
            {
                title: 'Utilized By',
                utilized: [
                    // { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👥', name: 'Everyone' },
                    // { icon: '📋', name: 'Operations Team' },
                    // { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Sent out 15 number of newsletters so far'
            }
        ]
    },
    'adage-day-app': {
        title: 'Adage Day 2025 Webapp',
        subtitle: 'Event web application giving participants schedules, information, and interactive features for Adage Day 2025.',
        sections: [
            {
                title: 'Overview',
                content: 'The Adage Day 2025 application was built from scratch using HTML, CSS, and JavaScript, hosted on Netlify for seamless access as a web app from any browser.\n\nIt serves as a comprehensive, 24/7 hub delivering real-time updates on team positions, event schedules, and essential details accessible to anyone from anywhere.\n\nThis one-stop solution eliminated fragmented communications, providing instant, reliable event information and enhancing participant engagement throughout Adage Day 2025.'
            },
            {
                title: 'Project Gallery',
                type: 'gallery',
                images: [
                    { src: 'ADA Projects 2025\\Adage Day Web App\\Main Landing Page.jpeg', alt: 'Main Landing Page' },
                    { src: 'ADA Projects 2025\\Adage Day Web App\\Winners Dashboard.jpeg', alt: 'Winners Dashboard' },
                    { src: 'ADA Projects 2025\\Adage Day Web App\\Schedule Page.jpeg', alt: 'Schedule Page' },
                    { src: 'ADA Projects 2025\\Adage Day Web App\\Contact Page.jpeg', alt: 'Contact Page' },
                    { src: 'ADA Projects 2025\\Adage Day Web App\\Guidelines Page.jpeg', alt: 'Guidelines Page' }
                ]
            },
            {
                title: 'Project Video',
                type: 'video',
                content: '<video controls style="width: 100%; height: auto;"><source src="ADA Projects 2025/Adage Day Web App/Adage App.webm" type="video/webm"></video>'
            },
            {
                title: 'Utilized By',
                utilized: [
                    // { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Everyone' },
                    // { icon: '📋', name: 'Operations Team' },
                    // { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Utilized for Adage Day 2025'
            }
        ]
    },
    'frontdesk': {
        title: 'Frontdesk Application for<br>AKAI/AKIC in Odoo',
        subtitle: 'Front office app for reception team to log visitors, manage appointments, and route visit requests.',
        sections: [
            {
                title: 'Overview',
                content: 'The frontdesk software and kiosk was introduced to streamline visitor management at the company, capturing detailed purpose of visit, scheduling future appointments, and tracking entries and exits in real time.\n\nIt enables the reception team to log visitor details efficiently, receive alerts for upcoming visits, and maintain accurate records without manual notebooks or spreadsheets.\n\nThis replaced informal check-ins with a professional, searchable system that improves security, reduces wait times, and provides analytics on visitor patterns for AKAI/AKIC operations.'
            },
            {
                title: 'Project Gallery',
                type: 'gallery',
                images: [
                    { src: 'ADA Projects 2025\\Frontdesk Module\\Frontdesk Interface.png', alt: 'Frontdesk Form View' },
                    { src: 'ADA Projects 2025\\Frontdesk Module\\Frontdesk Kiosk Starting Page.png', alt: 'Frontdesk Kiosk View' },
                    { src: 'ADA Projects 2025\\Frontdesk Module\\Frontdesk list view.png', alt: 'Frontdesk List View' }
                ]
            },
            {
                title: 'Project Video',
                type: 'video',
                content: '<video controls style="width: 100%; height: auto;"><source src="ADA Projects 2025/Frontdesk Module/Frontdesk Kiosk.webm" type="video/webm"></video>'
            },
            // {
            //     title: 'Project Documentation',
            //     type: 'pdf',
            //     url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            // },
            {
                title: 'Utilized By',
                utilized: [
                    // { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Reception Team' },
                    // { icon: '📋', name: 'Operations Team' },
                    // { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Utlization started by AKAI'
            }
        ]
    },
    'interactive-screen': {
        title: 'Interactive Screen for Exhibitions',
        subtitle: 'Touch-enabled display software that showcases company products and information to exhibition visitors.',
        sections: [
            {
                title: 'Overview',
                content: 'The interactive screen software, deployed at over 15 exhibitions during the year, was built entirely using HTML, CSS, and JavaScript for offline, locally hosted operation.\n\nIt features an intuitive dashboard allowing visitors to independently explore product offerings and company solutions without internet access, ensuring fast loading and smooth navigation.\n\nThis approach replaced static brochures with engaging, self-guided product discovery, boosting visitor interaction and lead generation at trade shows.'
            },
            {
                title: 'Project Gallery',
                type: 'gallery',
                images: [
                    { src: 'ADA Projects 2025\\Interactive Screen\\interactive screen adage.png', alt: 'Interactive Display Interface' },
                    { src: 'ADA Projects 2025\\Interactive Screen\\About Adage.png', alt: 'About Adage Page' },
                    { src: 'ADA Projects 2025\\Interactive Screen\\Cement Interface.png', alt: 'Sub Page of Cement Applications' },
                    { src: 'ADA Projects 2025\\Interactive Screen\\Oil n Gas Interface.png', alt: 'Sub Page of Oil & Gas Applications' },
                    { src: 'ADA Projects 2025\\Interactive Screen\\Inbuilt PPT Viewer.png', alt: 'Inbuilt PPT Viewer' }
                ]
            },
            {
                title: 'Project Video',
                type: 'video',
                content: '<video controls style="width: 100%; height: auto;"><source src="ADA Projects 2025/Interactive Screen/Industrial Application.webm" type="video/webm"></video>'
            },
            // {
            //     title: 'Project Documentation',
            //     type: 'pdf',
            //     url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            // },
            {
                title: 'Utilized By',
                utilized: [
                    // { icon: '🛠️', name: 'Service Managers' },
                    { icon: '🏟️', name: 'Exhibitors' },
                    // { icon: '📋', name: 'Operations Team' },
                    // { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Utilized for 15+ number of conferences & exhibitions this year'
            }
        ]
    },
    'website': {
        title: 'Adage-Kanoo Website',
        subtitle: 'Modern digital presence for partnership',
        sections: [
            {
                title: 'Overview',
                content: 'The Adage-Kanoo Website represents our partnership with a modern, professional digital presence. Featuring responsive design, compelling content, and integrated inquiry management, the site effectively showcases our joint capabilities and facilitates customer engagement.'
            },
            {
                title: 'Project Gallery',
                type: 'gallery',
                images: [
                    { src: 'https://via.placeholder.com/600x400?text=Responsive+Website+Design', alt: 'Responsive Website Design' },
                    { src: 'https://via.placeholder.com/600x400?text=Inquiry+Management+System', alt: 'Inquiry Management System' },
                    { src: 'https://via.placeholder.com/600x400?text=Partnership+Showcase+Page', alt: 'Partnership Showcase Page' }
                ]
            },
            {
                title: 'Project Documentation',
                type: 'pdf',
                url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Account Executives' },
                    { icon: '📋', name: 'Operations Team' },
                    { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Since launch, the website has generated 40% more qualified leads, reduced customer inquiry response time by 50%, and significantly enhanced our professional image in the market.'
            }
        ]
    },
    'project-mgmt': {
        title: 'Project Management for SBU Team',
        subtitle: 'Task and project tracking workspace for SBU 1 and SBU 2 design teams to monitor progress and deadlines.',
        sections: [
            {
                title: 'Overview',
                content: 'The project management software was implemented to enable efficient tracking of workloads, provide transparent progress visibility for each task, and ensure structured oversight of all projects. It structures the design team\'s workflow with defined stages, timelines, and accountability metrics, allowing teams to log hours accurately and monitor completion against planned durations. This rollout shifted operations from informal, scattered tracking to a disciplined system, guaranteeing on-time project delivery and better resource allocation across SBU 1 and SBU 2.'
            },
            {
                title: 'Project Gallery',
                type: 'gallery',
                images: [
                    { src: 'ADA Projects 2025\\Project Management\\Project Main Kanban View.png', alt: 'Kanban View of Projects' },
                    { src: 'ADA Projects 2025\\Project Management\\Project Tasks Kanban View.png', alt: 'Kanban view of tasks of each project' },
                    { src: 'ADA Projects 2025\\Project Management\\Automatic Reports of each project at a glance.png', alt: 'Reports of each project at a glance' }
                ]
            },
            {
                title: 'Project Video',
                type: 'video',
                content: '<video controls style="width: 100%; height: auto;"><source src="ADA Projects 2025/Project Management/Project Management.webm" type="video/webm"></video>'
            },
            {
                title: 'Project Documentation',
                type: 'pdf',
                url: 'ADA Projects 2025\\Project Management\\Odoo Projects (Team) Guide.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '👨‍💼', name: 'Design & Engineering Team' },
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Utlization started by SBU 1'
            }
        ]
    },
    'doc-mgmt': {
        title: 'Document Management for<br>Standardized Drawings',
        subtitle: 'Central repository for SBU 2 documents with controlled access and version tracking.',
        sections: [
            {
                title: 'Overview',
                content: 'The document management system integrates with inventory management to organize drawings and files for every physical part in the company. Previously, teams relied on Excel sheets with manual updates, limited access controls, and poor visibility into file locations or changes.\n\nThis was replaced by Odoo\'s version control features, private visibility settings, download analytics, and advanced filtering/grouping options for easy traceability of products.\n\nThe rollout eliminated scattered files, ensured only authorized access, tracked usage patterns, and enabled quick searches by part number or category, streamlining compliance and collaboration for SBU 2.'
            },
            {
                title: 'Project Video',
                type: 'video',
                content: '<video controls style="width: 100%; height: auto;"><source src="ADA Projects 2025/Document Management/Product Inventory Management.mp4" type="video/mp4"></video>'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '👨‍💼', name: 'SBU 2 Team' },
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'All standardized drawings created by SBU2 tracked in Odoo'
            }
        ]
    },
    'dashboards': {
        title: 'Dashboards and Reporting in Odoo',
        subtitle: 'Real-time business intelligence across operations',
        sections: [
            {
                title: 'Overview',
                content: 'The comprehensive Dashboards and Reporting solution provides real-time visibility into business performance across all functions. From sales and operations to finance and HR, stakeholders have instant access to the metrics that matter most to their roles.'
            },
            {
                title: 'Project Gallery',
                type: 'gallery',
                images: [
                    { src: 'https://via.placeholder.com/600x400?text=Business+Intelligence+Dashboard', alt: 'Business Intelligence Dashboard' },
                    { src: 'https://via.placeholder.com/600x400?text=Real-time+Reporting+System', alt: 'Real-time Reporting System' },
                    { src: 'https://via.placeholder.com/600x400?text=KPI+Tracking+Interface', alt: 'KPI Tracking Interface' }
                ]
            },
            {
                title: 'Project Documentation',
                type: 'pdf',
                url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Account Executives' },
                    { icon: '📋', name: 'Operations Team' },
                    { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Decision-making speed has improved by 50%, report preparation time reduced by 90%, and executives have gained unprecedented visibility into real-time business performance. Data-driven decision making has become the norm across the organization.'
            }
        ]
    },
    'field-service': {
        title: 'Field Service in Odoo',
        subtitle: 'User - friendly module for planning, dispatching, and reporting of service engineer field visits.',
        sections: [
            {
                title: 'Overview',
                content: 'The Field Service Management system is in progress and expected to launch by January 2026, enabling service engineers to record maintenance or commissioning visits with details on identified problems and solutions.\n\nThis creates a shared knowledge base, allowing new engineers to review past site-specific notes before visits, reducing repeat issues and improving efficiency.\n\nManagers gain a comprehensive dashboard view of engineer locations, timelines, and workloads, facilitating optimal task assignments and resource planning.'
            },
            {
                title: 'Project Gallery',
                type: 'gallery',
                images: [
                    { src: 'ADA Projects 2025/Field Service Management/Form.png', alt: 'Form View' },
                    { src: 'ADA Projects 2025/Field Service Management/Gantt View.png', alt: 'Timesheet/ Gantt View' },
                    { src: 'ADA Projects 2025/Field Service Management/Worksheet.png', alt: 'Worksheet Form View' }
                ]
            },
            // {
            //     title: 'Project Documentation',
            //     type: 'pdf',
            //     url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            // },
            {
                title: 'Utilized by',
                utilized: [
                    { icon: '🛠️', name: 'Service Engineers' },
                    { icon: '👨‍💼', name: 'Management' },
                    // { icon: '📋', name: 'Operations Team' },
                    // { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'To be launched in Jan 2026'
            }
        ]
    },
    'recruitment': {
        title: 'Recruitment in Odoo',
        subtitle: 'Hiring workflow system to manage job postings, applications, interviews, and candidate status for HR.',
        sections: [
            {
                title: 'Overview',
                content: 'The Recruitment module streamlines HR workflows by maintaining a structured database for new hires, managing the full interview process, and automating steps from candidate screening through onboarding and employee record creation.\n\nIt centralizes resumes, schedules interviews, tracks statuses, and generates offers, reducing paperwork and ensuring smooth transitions to active employment.\n\nWith demonstrations completed, only live implementation and real-world usage remain, positioning it for quick rollout to enhance hiring efficiency.'
            },
            {
                title: 'Project Video',
                type: 'video',
                content: '<video controls style="width: 100%; height: auto;"><source src="ADA Projects 2025/Recruitment/Recruitment.webm" type="video/webm"></video>'
            },
            // {
            //     title: 'Project Gallery',
            //     type: 'gallery',
            //     images: [
            //         { src: 'https://via.placeholder.com/600x400?text=Job+Posting+Platform', alt: 'Job Posting Platform' },
            //         { src: 'https://via.placeholder.com/600x400?text=AI+Candidate+Screening', alt: 'AI Candidate Screening' },
            //         { src: 'https://via.placeholder.com/600x400?text=Onboarding+Workflow+System', alt: 'Onboarding Workflow System' }
            //     ]
            // },
            // {
            //     title: 'Project Documentation',
            //     type: 'pdf',
            //     url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            // },
            {
                title: 'Utilized by',
                utilized: [
                    { icon: '👨‍💼', name: 'HR' },
                    { icon: '👥', name: 'Interested Candidates' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'To be launched in Q1 2026'
            }
        ]
    },
    'elearning': {
        title: 'Odoo eLearning',
        subtitle: 'Training and onboarding portal to host courses, quizzes, and learning paths for new employees set by HR.',
        sections: [
            {
                title: 'Overview',
                content: 'The eLearning platform provides a self-paced onboarding hub where new employees can log in independently, access resources, and complete custom courses without heavy reliance on personal interactions.\n\nCourses, developed in collaboration with Management and HR, cover key topics with progress tracking, quizzes, and digital certifications upon completion, fostering skill recognition and career growth within the company.\n\nStill in progress, this system will standardize training, reduce onboarding time, and create a centralized repository of company knowledge accessible anytime.'
            },
            {
                title: 'Utilized by',
                utilized: [
                    { icon: '�', name: 'New Employees' },
                    { icon: '👨‍💼', name: 'HR' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'To be launched in Q1 2026'
            }
        ]
    },
    'sap-odoo-sync': {
        title: 'SAP - Odoo Sync',
        subtitle: 'Automated data synchronization between SAP ERP and Odoo CRM platforms',
        sections: [
            {
                title: 'Overview',
                content: 'The SAP - Odoo Sync system provides seamless integration between SAP ERP and Odoo CRM platforms, enabling real-time data synchronization for customers, products, orders, and inventory. This eliminates manual data entry, reduces errors, and ensures data consistency across both systems.'
            },
            {
                title: 'Project Gallery',
                type: 'gallery',
                images: [
                    { src: 'ADA Projects 2025/SAP Odoo Sync/SAP-Odoo_Data_Synchronization_Flowchart.png', alt: 'SAP-Odoo_Data_Synchronization_Flowchart' },
                    { src: 'ADA Projects 2025/SAP Odoo Sync/SAP Data imported to Inventory module.png', alt: 'SAP Data imported to Inventory module' }
                ]
            },
            // {
            //     title: 'Project Documentation',
            //     type: 'pdf',
            //     url: 'ADA Projects 2025/SAP Odoo Sync/SAP_Odoo_Sync_Documentation.pdf'
            // },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '🛠️', name: 'Digitalization & AI Team' },
                    // { icon: '💼', name: 'Sales Team' },
                    // { icon: '📊', name: 'Finance Department' },
                    // { icon: '🛠️', name: 'IT Department' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Expected to reduce data synchronization time by 95%, eliminate manual data entry errors, and provide real-time visibility across SAP and Odoo systems.'
            }
        ]
    },
    'employee-handbook': {
        title: 'Employee Handbook',
        subtitle: 'Comprehensive digital employee handbook with policies, procedures, and company guidelines',
        sections: [
            {
                title: 'Overview',
                content: 'The Employee Handbook is a comprehensive digital resource providing all employees with essential information about company policies, procedures, benefits, and guidelines. This interactive handbook ensures consistent communication and easy access to important HR information across the organization.'
            },
            {
                title: 'Project Documentation',
                type: 'pdf',
                url: 'ADA Projects 2025/Employee Handbook/Employee_Handbook.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '👥', name: 'All Employees' },
                    { icon: '👨‍💼', name: 'HR Department' },
                    { icon: '🏢', name: 'Management' },
                    { icon: '📚', name: 'New Hires' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Provides centralized access to company policies, improves compliance, reduces HR inquiries, and ensures all employees have up-to-date information on procedures and benefits.'
            }
        ]
    },
    'smart-quotation-acmg': {
        title: 'Smart Quotation Generation for ACMG',
        subtitle: 'Intelligent tool to generate accurate, standardized quotations for ACMG based on inputs and predefined templates directly from Odoo',
        sections: [
            {
                title: 'Overview',
                content: 'The Employee Handbook serves as a centralized, secure resource hub accessible via company login, covering mission, vision, policies, holidays, culture, and working environment in a transparent format.\n\nIt eliminates scattered documents or verbal handovers, enabling employees to self-serve information anytime for better onboarding and daily reference.\n\nThis digital approach fosters consistency, compliance, and engagement across teams by providing an easy-to-navigate, always-updated single source of company knowledge.'
            },
            {
                title: 'Project Documentation',
                type: 'pdf',
                url: 'ADA Projects 2025/smart quotation generation/Smart Quotation Generation for ACMG/Quotation Generation/Automating Quotation Document Generation.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '👨‍💼', name: 'ACMG Teams' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'To be launched in Q1 2026'
            }
        ]
    },
    'datasheet-pdf-quotations': {
        title: 'Datasheet creation from PDF for Quotations',
        subtitle: 'Automated Extraction and Organization of Data from PDF to Excel.',
        sections: [
            {
                title: 'Overview',
                content: 'This extracts required data from a PDF file and automatically organizes it into a structured Excel sheet. It filters relevant information and prepares a final, ready-to-use dataset.\n\nBy replacing manual PDF reading and data entry, it saves time, reduces errors, and makes handling large technical documents much easier.'
            },
            {
                title: 'Project Documentation',
                type: 'pdf',
                url: 'ADA Projects 2025/Datasheet creation from PDF for Quotations/Datasheet_Extraction_Documentation.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '👨‍💼', name: 'ACMG Teams' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Utlized by ACMG Team.'
            }
        ]
    }
};

// Initialize matrix effect
const matrixEffect = initMatrixEffect();

// Show loading overlay on page load
window.addEventListener('load', () => {
    const matrixOverlay = document.getElementById('matrixOverlay');
    const mainContainer = document.getElementById('mainContainer');
    
    if (!matrixOverlay) return;
    
    // Show the loading overlay
    matrixOverlay.classList.add('active');
    matrixEffect.start();
    
    // Hide after 3 seconds
    setTimeout(() => {
        matrixOverlay.classList.remove('active');
        matrixEffect.stop();
    }, 3000);
});

// Open project detail page with matrix animation
function openProject(projectKey) {
    const project = projectData[projectKey];
    if (!project) return;
    
    const matrixOverlay = document.getElementById('matrixOverlay');
    
    // Show matrix overlay
    matrixOverlay.classList.add('active');
    matrixEffect.start();
    
    // Load project after animation
    setTimeout(() => {
        const detailPage = document.getElementById('projectDetailPage');
        const mainContainer = document.getElementById('mainContainer');
        
        // Build HTML for detail page
        let html = `
            <div class="detail-header">
                <button class="back-button" onclick="closeProject()">← Back</button>
                <h2 class="detail-title">${project.title}</h2>
                <p class="detail-subtitle">${project.subtitle}</p>
            </div>
            <div class="detail-content">
        `;
        
        // Add sections
        // Side by side for Utilized By and Business Impact
        let utilizedIndex = project.sections.findIndex(s => s.title === 'Utilized By' || s.title === 'Utilized by');
        let impactIndex = project.sections.findIndex(s => s.title === 'Impact and Adoption');
        
        if (utilizedIndex !== -1 && impactIndex !== -1) {
            html += `
                <div class="side-by-side">
                    <div class="detail-section">
                        <h3>${project.sections[utilizedIndex].title}</h3>
            `;
            
            if (project.sections[utilizedIndex].utilized) {
                html += `<div class="utilized-list">`;
                project.sections[utilizedIndex].utilized.forEach(util => {
                    html += `
                        <div class="utilized-item">
                            <div class="utilized-icon">${util.icon}</div>
                            <div class="utilized-name">${util.name}</div>
                        </div>
                    `;
                });
                html += `</div>`;
            }
            
            html += `
                    </div>
                    <div class="detail-section">
                        <h3>${project.sections[impactIndex].title}</h3>
                        <p>${project.sections[impactIndex].content}</p>
                    </div>
                </div>
            `;
        }
        
        // Render Overview
        html += `
            <div class="detail-section overview-section">
                <h3>${project.sections[0].title}</h3>
                <p>${project.sections[0].content}</p>
            </div>
        `;

        // Find gallery/pdf/video/dashboard sections by type
        const gallerySection = project.sections.find(s => s && s.type === 'gallery');
        const pdfSection = project.sections.find(s => s && s.type === 'pdf');
        const videoSection = project.sections.find(s => s && s.type === 'video');
        const dashboardSection = project.sections.find(s => s && s.type === 'dashboard');

        // Render Video first if present
        if (videoSection) {
            html += `
                <div class="detail-section">
                    <h3>${videoSection.title}</h3>
                    <div>${videoSection.content}</div>
                </div>
            `;
        }

        // Render Dashboard if present
        if (dashboardSection) {
            html += `
                <div class="detail-section">
                    <h3>${dashboardSection.title}</h3>
                    <iframe src="${dashboardSection.url}" width="100%" height="800px" style="border: none; border-radius: 8px;"></iframe>
                </div>
            `;
        }

        // Render Gallery if present
        if (gallerySection) {
            html += `
                <div class="detail-section">
                    <h3>${gallerySection.title}</h3>
                    <div class="gallery-container" style="width: 100%; max-width: 1920px; height: auto; min-height: 600px; display: flex; flex-direction: column; margin: 0 auto;">
                        <div class="slideshow" style="flex: 1; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
            `;
            gallerySection.images.forEach((img, index) => {
                html += `<img src="${img.src}" alt="${img.alt}" class="slide ${index === 0 ? 'active' : ''}" data-zoom="1" style="max-width:100%;max-height:100%;object-fit:contain;display:block;transition:transform 0.2s ease;transform-origin:center center;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(' + (this.dataset.zoom || 1) + ')'">`;
            });
            html += `
                        </div>
                        <div class="caption">${gallerySection.images[0].alt}</div>
                        <button class="prev" onclick="changeSlide(-1)">❮</button>
                        <button class="next" onclick="changeSlide(1)">❯</button>
                    </div>
                </div>
            `;
        }

        // Render PDF if present
        if (pdfSection) {
            html += `
                <div class="detail-section">
                    <h3>${pdfSection.title}</h3>
                    <iframe src="${pdfSection.url}" width="100%" height="600px" style="border: none;"></iframe>
                </div>
            `;
        }
        
        html += `</div>`;
        
        detailPage.innerHTML = html;
        
        // Add wheel zoom and drag functionality to slideshow images
        const slideshow = detailPage.querySelector('.slideshow');
        if (slideshow) {
            let isDragging = false;
            let startX = 0, startY = 0;
            let translateX = 0, translateY = 0;
            
            slideshow.addEventListener('wheel', function(e) {
                const activeSlide = slideshow.querySelector('.slide.active');
                if (activeSlide) {
                    e.preventDefault();
                    let currentZoom = parseFloat(activeSlide.dataset.zoom) || 1;
                    const delta = e.deltaY < 0 ? 0.1 : -0.1;
                    currentZoom = Math.min(3, Math.max(1, currentZoom + delta));
                    activeSlide.dataset.zoom = currentZoom;
                    
                    // Reset translation when zoom is 1
                    if (currentZoom === 1) {
                        translateX = 0;
                        translateY = 0;
                        activeSlide.dataset.translateX = 0;
                        activeSlide.dataset.translateY = 0;
                        activeSlide.style.cursor = 'default';
                    } else {
                        activeSlide.style.cursor = 'grab';
                    }
                    
                    activeSlide.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentZoom})`;
                }
            }, { passive: false });
            
            slideshow.addEventListener('mousedown', function(e) {
                const activeSlide = slideshow.querySelector('.slide.active');
                if (activeSlide && parseFloat(activeSlide.dataset.zoom) > 1) {
                    isDragging = true;
                    startX = e.clientX;
                    startY = e.clientY;
                    translateX = parseFloat(activeSlide.dataset.translateX) || 0;
                    translateY = parseFloat(activeSlide.dataset.translateY) || 0;
                    activeSlide.style.cursor = 'grabbing';
                    e.preventDefault();
                }
            });
            
            slideshow.addEventListener('mousemove', function(e) {
                if (isDragging) {
                    const activeSlide = slideshow.querySelector('.slide.active');
                    if (activeSlide) {
                        const deltaX = e.clientX - startX;
                        const deltaY = e.clientY - startY;
                        const newTranslateX = translateX + deltaX;
                        const newTranslateY = translateY + deltaY;
                        const currentZoom = parseFloat(activeSlide.dataset.zoom) || 1;
                        activeSlide.style.transform = `translate(${newTranslateX}px, ${newTranslateY}px) scale(${currentZoom})`;
                    }
                }
            });
            
            slideshow.addEventListener('mouseup', function(e) {
                if (isDragging) {
                    const activeSlide = slideshow.querySelector('.slide.active');
                    if (activeSlide) {
                        const deltaX = e.clientX - startX;
                        const deltaY = e.clientY - startY;
                        translateX = translateX + deltaX;
                        translateY = translateY + deltaY;
                        activeSlide.dataset.translateX = translateX;
                        activeSlide.dataset.translateY = translateY;
                        activeSlide.style.cursor = 'grab';
                    }
                    isDragging = false;
                }
            });
            
            slideshow.addEventListener('mouseleave', function() {
                if (isDragging) {
                    const activeSlide = slideshow.querySelector('.slide.active');
                    if (activeSlide) {
                        activeSlide.style.cursor = 'grab';
                    }
                    isDragging = false;
                }
            });
        }
        
        // Hide matrix overlay and show detail page
        matrixOverlay.classList.remove('active');
        matrixEffect.stop();
        detailPage.classList.add('active');
        mainContainer.style.display = 'none';
        
        // Scroll to top
        window.scrollTo(0, 0);
    }, 2000);
}

// Close project detail page
function closeProject() {
    const detailPage = document.getElementById('projectDetailPage');
    const mainContainer = document.getElementById('mainContainer');
    
    detailPage.classList.remove('active');
    mainContainer.style.display = 'block';
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Slideshow functions
let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    
    // Update caption
    const caption = document.querySelector('.caption');
    if (caption) {
        caption.textContent = slides[currentSlide].alt;
    }
}

// Image viewer overlay for zoomable slides
let viewerScale = 1;

function ensureImageViewer() {
    let overlay = document.getElementById('imageViewerOverlay');
    if (overlay) {
        return overlay;
    }
    overlay = document.createElement('div');
    overlay.id = 'imageViewerOverlay';
    overlay.style.cssText = 'position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,0.85);z-index:2000;padding:24px;';
    const frame = document.createElement('div');
    frame.style.cssText = 'position:relative;max-width:90vw;max-height:90vh;display:flex;align-items:center;justify-content:center;';
    const img = document.createElement('img');
    img.style.cssText = 'max-width:100%;max-height:100%;transform-origin:center center;transition:transform 0.1s ease-out;border-radius:8px;box-shadow:0 10px 40px rgba(0,0,0,0.45);';
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.setAttribute('aria-label', 'Close image');
    closeBtn.style.cssText = 'position:absolute;top:-12px;right:-12px;width:32px;height:32px;border:none;border-radius:50%;background:#111;color:#fff;font-size:16px;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.35);';
    closeBtn.addEventListener('click', hideImageViewer);
    frame.appendChild(img);
    frame.appendChild(closeBtn);
    overlay.appendChild(frame);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            hideImageViewer();
        }
    });
    overlay.addEventListener('wheel', (e) => {
        if (overlay.style.display !== 'flex') return;
        e.preventDefault();
        const delta = e.deltaY < 0 ? 0.15 : -0.15;
        viewerScale = Math.min(4, Math.max(1, viewerScale + delta));
        img.style.transform = `scale(${viewerScale})`;
    }, { passive: false });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.style.display === 'flex') {
            hideImageViewer();
        }
    });
    document.body.appendChild(overlay);
    return overlay;
}

function showImageInViewer(src, alt) {
    const overlay = ensureImageViewer();
    const img = overlay.querySelector('img');
    viewerScale = 1;
    img.src = src;
    img.alt = alt || '';
    img.style.transform = 'scale(1)';
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function hideImageViewer() {
    const overlay = ensureImageViewer();
    overlay.style.display = 'none';
    document.body.style.overflow = '';
}

function attachImageViewerHandlers(root = document) {
    const images = root.querySelectorAll('img.slide');
    images.forEach((img) => {
        if (img.dataset.viewerBound === '1') return;
        img.dataset.viewerBound = '1';
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => showImageInViewer(img.src, img.alt));
    });
}

// Bind to any slides already on the page (if present)
attachImageViewerHandlers();

// Handle window resize for matrix canvas
window.addEventListener('resize', () => {
    const canvas = document.getElementById('matrixCanvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});

// Back to top button
const backToTopBtn = document.getElementById('backToTop');
const detailPageScrollContainer = document.getElementById('projectDetailPage');

if (backToTopBtn) {
    const threshold = 300;

    const updateBackToTop = (source) => {
        const scrollPos = source === window ? window.scrollY : source.scrollTop;
        if (scrollPos > threshold) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    };

    window.addEventListener('scroll', () => updateBackToTop(window));

    if (detailPageScrollContainer) {
        detailPageScrollContainer.addEventListener('scroll', () => updateBackToTop(detailPageScrollContainer));
    }

    backToTopBtn.addEventListener('click', () => {
        if (detailPageScrollContainer && detailPageScrollContainer.classList.contains('active')) {
            detailPageScrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    updateBackToTop(window);
}


