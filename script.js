// Mouse gradient effect
const mouseGradient = document.getElementById('mouseGradient');
let mouseX = 0;
let mouseY = 0;
let gradientX = 0;
let gradientY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

document.addEventListener('mouseenter', () => {
    mouseGradient.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    mouseGradient.style.opacity = '0';
});

function animate() {
    gradientX += (mouseX - gradientX) * 0.15;
    gradientY += (mouseY - gradientY) * 0.15;
    mouseGradient.style.left = gradientX + 'px';
    mouseGradient.style.top = gradientY + 'px';
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
        title: 'Odoo for ACMG (Sales)',
        subtitle: 'Comprehensive sales management solution for the ACMG division',
        sections: [
            {
                title: 'Overview',
                content: 'Odoo for ACMG is a fully integrated enterprise resource planning solution designed to streamline sales operations, enhance customer relationship management, and provide real-time insights into revenue performance. This system has transformed how the ACMG division manages its entire sales lifecycle.'
            },
            {
                title: 'Key Features',
                features: [
                    {
                        name: 'Lead Management',
                        description: 'Capture, qualify, and convert leads with automated workflows and intelligent routing'
                    },
                    {
                        name: 'Order Processing',
                        description: 'Streamlined order entry, approval workflows, and real-time inventory integration'
                    },
                    {
                        name: 'Customer Portal',
                        description: 'Self-service portal for customers to track orders, invoices, and communications'
                    },
                    {
                        name: 'Analytics Dashboard',
                        description: 'Real-time sales metrics, forecasting, and performance tracking'
                    }
                ]
            },
            {
                title: 'Business Impact',
                content: 'Since implementation, the ACMG division has experienced a 35% increase in sales efficiency, 50% reduction in order processing time, and improved customer satisfaction scores. The system has enabled better forecasting accuracy and provided management with actionable insights for strategic decision-making.'
            }
        ]
    },
    'sales-crm': {
        title: 'Odoo for Sales (CRM & Sales)',
        subtitle: 'Advanced CRM platform for comprehensive sales operations',
        sections: [
            {
                title: 'Overview',
                content: 'Odoo for Sales provides a complete 360-degree view of customer interactions, opportunities, and sales performance. Built on Odoo, this platform empowers sales teams with the tools they need to close deals faster and build stronger customer relationships.'
            },
            {
                title: 'Key Features',
                features: [
                    {
                        name: 'Pipeline Visualization',
                        description: 'Intuitive kanban boards showing deal progression through customizable stages'
                    },
                    {
                        name: 'Activity Management',
                        description: 'Automated reminders, task assignments, and follow-up scheduling'
                    },
                    {
                        name: 'Email Integration',
                        description: 'Seamless email tracking and template management within the CRM'
                    },
                    {
                        name: 'Forecasting Tools',
                        description: 'Predictive analytics and revenue forecasting based on pipeline data'
                    }
                ]
            },
            {
                title: 'Results',
                content: 'The CRM implementation has led to a 40% improvement in lead conversion rates, 30% increase in sales team productivity, and enhanced visibility into sales performance across all divisions. Sales managers now have real-time dashboards for coaching and performance improvement.'
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
                title: 'Key Features',
                features: [
                    {
                        name: 'Service Contracts',
                        description: 'Management of recurring service agreements with automated renewal tracking'
                    },
                    {
                        name: 'Custom Pricing',
                        description: 'Dynamic pricing models supporting service tiers and volume discounts'
                    },
                    {
                        name: 'Service History',
                        description: 'Complete visibility into customer service records and interaction history'
                    },
                    {
                        name: 'Performance Metrics',
                        description: 'Division-specific KPIs and reporting tailored to service operations'
                    }
                ]
            },
            {
                title: 'Business Impact',
                content: 'CSD has achieved 45% faster quote generation, 25% improvement in contract renewal rates, and significantly enhanced customer retention through better service tracking and proactive engagement.'
            }
        ]
    },
    'service-rfq': {
        title: 'Odoo for Service Engineers (Website Form RFQ)',
        subtitle: 'Streamlined request management for field service teams',
        sections: [
            {
                title: 'Overview',
                content: 'The Service Engineers RFQ Portal provides a user-friendly web interface for field service engineers to submit, track, and manage requests for quotations. This system bridges the gap between field operations and back-office sales teams, ensuring rapid response times and accurate pricing.'
            },
            {
                title: 'Key Features',
                features: [
                    {
                        name: 'Mobile-Optimized Forms',
                        description: 'Responsive design allowing RFQ submission from any device in the field'
                    },
                    {
                        name: 'Photo Uploads',
                        description: 'Attach site photos and equipment images directly to requests'
                    },
                    {
                        name: 'Real-Time Status',
                        description: 'Track RFQ progress from submission through quotation and approval'
                    },
                    {
                        name: 'Odoo Integration',
                        description: 'Seamless data flow into Odoo CRM for quotation generation'
                    }
                ]
            },
            {
                title: 'Results',
                content: 'Service engineers report 60% faster RFQ submission times, while sales teams have reduced quotation turnaround by 50%. The portal has eliminated lost or misplaced requests and improved overall service responsiveness.'
            }
        ]
    },
    'safety': {
        title: 'Safety Meetings Odoo Custom Module',
        subtitle: 'Comprehensive solution for workplace safety compliance',
        sections: [
            {
                title: 'Overview',
                content: 'The Safety Meetings Custom Module helps organizations maintain compliance with safety regulations while fostering a culture of workplace safety. Built as an Odoo extension, this module provides end-to-end management of safety meetings, training, and incident reporting.'
            },
            {
                title: 'Key Features',
                features: [
                    {
                        name: 'Meeting Scheduling',
                        description: 'Automated scheduling with calendar integration and attendance tracking'
                    },
                    {
                        name: 'Compliance Tracking',
                        description: 'Monitor required training completion and certification expiration dates'
                    },
                    {
                        name: 'Digital Documentation',
                        description: 'Paperless meeting minutes, sign-in sheets, and safety reports'
                    },
                    {
                        name: 'Incident Management',
                        description: 'Record and track safety incidents with corrective action workflows'
                    }
                ]
            },
            {
                title: 'Business Impact',
                content: 'The module has improved safety meeting attendance by 85%, reduced administrative time by 70%, and provided management with comprehensive safety metrics for continuous improvement initiatives.'
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
                title: 'Planned Features',
                features: [
                    {
                        name: 'Template Engine',
                        description: 'Customizable quotation templates with dynamic content and branding'
                    },
                    {
                        name: 'Smart Pricing',
                        description: 'Automated price calculations with discount rules and approval workflows'
                    },
                    {
                        name: 'Multi-Format Export',
                        description: 'Generate quotations in PDF, Word, and Excel formats'
                    },
                    {
                        name: 'Version Control',
                        description: 'Track quotation revisions and maintain complete audit trails'
                    }
                ]
            },
            {
                title: 'Expected Benefits',
                content: 'We anticipate 80% reduction in quotation preparation time, elimination of pricing errors, consistent professional formatting across all quotes, and improved win rates through faster response times to customer requests.'
            }
        ]
    },
    'dew-bubble': {
        title: 'Dew Point & Bubble Point Calculation Python Script',
        subtitle: 'Precision engineering calculations for process design',
        sections: [
            {
                title: 'Overview',
                content: 'The Dew Point & Bubble Point Calculator is a specialized engineering tool that performs thermodynamic calculations essential for process equipment design and specification. This application supports engineers in accurately determining phase equilibrium conditions for various gas mixtures.'
            },
            {
                title: 'Key Features',
                features: [
                    {
                        name: 'Multi-Component Analysis',
                        description: 'Calculate dew and bubble points for complex gas mixtures'
                    },
                    {
                        name: 'Property Database',
                        description: 'Comprehensive database of gas properties and equations of state'
                    },
                    {
                        name: 'Graphical Output',
                        description: 'Visual representation of phase diagrams and calculation results'
                    },
                    {
                        name: 'Report Generation',
                        description: 'Professional calculation reports for design documentation'
                    }
                ]
            },
            {
                title: 'Business Impact',
                content: 'Engineers have reduced calculation time by 90% while improving accuracy. The tool has become essential for equipment sizing, process optimization, and customer technical support.'
            }
        ]
    },
    'lag-pressure': {
        title: 'Lag Time & Pressure Drop Calculation Python Script',
        subtitle: 'Advanced system analysis for pipeline design',
        sections: [
            {
                title: 'Overview',
                content: 'This calculation tool helps engineers analyze system dynamics, including lag times and pressure drops across pipelines and equipment. Critical for system design and troubleshooting, it ensures optimal performance and safety in pneumatic and process systems.'
            },
            {
                title: 'Key Features',
                features: [
                    {
                        name: 'Pipeline Modeling',
                        description: 'Comprehensive modeling of pipeline networks with fittings and valves'
                    },
                    {
                        name: 'Transient Analysis',
                        description: 'Calculate system response times and lag in control loops'
                    },
                    {
                        name: 'Optimization Tools',
                        description: 'Identify bottlenecks and optimize system design'
                    },
                    {
                        name: 'Standards Compliance',
                        description: 'Ensure designs meet industry standards and best practices'
                    }
                ]
            },
            {
                title: 'Results',
                content: 'The tool has accelerated engineering workflows by 75%, reduced design iterations, and helped prevent costly field modifications through more accurate initial designs.'
            }
        ]
    },
    'auction': {
        title: 'Auction Custom Software for Adage Day',
        subtitle: 'Interactive bidding system for company celebrations',
        sections: [
            {
                title: 'Overview',
                content: 'Developed specifically for Adage Day 2025, this auction platform created an engaging and exciting experience for employees. The system managed item listings, real-time bidding, and automated winner selection, making the event memorable and successful.'
            },
            {
                title: 'Key Features',
                features: [
                    {
                        name: 'Real-Time Bidding',
                        description: 'Live bid updates with countdown timers and automatic notifications'
                    },
                    {
                        name: 'Item Management',
                        description: 'Photo galleries, descriptions, and minimum bid settings'
                    },
                    {
                        name: 'User Accounts',
                        description: 'Personalized dashboards showing bids, wins, and payment status'
                    },
                    {
                        name: 'Admin Controls',
                        description: 'Complete auction management with real-time monitoring and reporting'
                    }
                ]
            },
            {
                title: 'Event Success',
                content: 'The platform facilitated over 500 bids across 50 items during Adage Day 2025, with 100% uptime and enthusiastic participation from employees. The success has led to requests for similar platforms for future company events.'
            }
        ]
    },
    'intellidas': {
        title: 'IntelliDAS Software',
        subtitle: 'Next-generation data acquisition system (Not yet launched)',
        sections: [
            {
                title: 'Overview',
                content: 'IntelliDAS represents our entry into intelligent data acquisition and analysis solutions. This software will provide advanced algorithms and machine learning capabilities to ensure optimal performance and insights.'
            },
            {
                title: 'Planned Features',
                features: [
                    {
                        name: 'AI-Powered Analysis',
                        description: 'Machine learning algorithms for intelligent data processing'
                    },
                    {
                        name: 'Anomaly Detection',
                        description: 'Automated detection of unusual patterns and data anomalies'
                    },
                    {
                        name: 'Predictive Analytics',
                        description: 'Real-time predictions and trend analysis'
                    },
                    {
                        name: 'Advanced Visualization',
                        description: 'Interactive dashboards with comprehensive data visualization'
                    }
                ]
            },
            {
                title: 'Market Opportunity',
                content: 'IntelliDAS will position us in the growing market for intelligent data solutions, addressing the increasing demand for advanced analytics in business operations.'
            }
        ]
    },
    'sap-search': {
        title: 'SAP Smart Item Search',
        subtitle: 'AI-powered inventory search and discovery (Not yet launched)',
        sections: [
            {
                title: 'Overview',
                content: 'SAP Smart Item Search (not yet launched) will transform how users interact with SAP inventory data. Using natural language processing and intelligent search algorithms, this tool will make finding the right items faster and more intuitive than ever before.'
            },
            {
                title: 'Planned Features',
                features: [
                    {
                        name: 'Natural Language Search',
                        description: 'Search using conversational queries instead of technical codes'
                    },
                    {
                        name: 'Smart Suggestions',
                        description: 'AI-powered recommendations based on search patterns and context'
                    },
                    {
                        name: 'Visual Recognition',
                        description: 'Image-based search to find items by appearance'
                    },
                    {
                        name: 'Quick Actions',
                        description: 'Direct links to create POs, check availability, and view specifications'
                    }
                ]
            },
            {
                title: 'Expected Impact',
                content: 'We anticipate reducing item search time by 70%, decreasing incorrect item selections by 85%, and significantly improving user satisfaction with SAP interactions.'
            }
        ]
    },
    'newsletter': {
        title: 'Adage Connect Newsletter',
        subtitle: 'Engaging internal communications platform',
        sections: [
            {
                title: 'Overview',
                content: 'Adage Connect Newsletter keeps our entire organization informed and engaged. This digital platform delivers company news, employee achievements, upcoming events, and important updates in a visually appealing and easily digestible format.'
            },
            {
                title: 'Key Features',
                features: [
                    {
                        name: 'Rich Content',
                        description: 'Support for articles, photos, videos, and interactive elements'
                    },
                    {
                        name: 'Personalization',
                        description: 'Tailored content based on department, location, and interests'
                    },
                    {
                        name: 'Mobile-Friendly',
                        description: 'Responsive design ensuring great experience on all devices'
                    },
                    {
                        name: 'Analytics Dashboard',
                        description: 'Track readership, engagement, and content performance'
                    }
                ]
            },
            {
                title: 'Engagement Results',
                content: 'Since launch, Adage Connect has achieved 85% regular readership, with employees spending an average of 8 minutes per newsletter edition. The platform has become a vital tool for maintaining company culture and keeping everyone connected.'
            }
        ]
    },
    'adage-day-app': {
        title: 'Adage Day 2025 Webapp',
        subtitle: 'Complete event management solution',
        sections: [
            {
                title: 'Overview',
                content: 'The Adage Day 2025 Webapp served as the central hub for our annual company celebration. From registration to real-time event updates, this comprehensive platform ensured every aspect of the event ran smoothly and kept participants engaged throughout the day.'
            },
            {
                title: 'Key Features',
                features: [
                    {
                        name: 'Event Registration',
                        description: 'Easy sign-up for activities, meals, and entertainment'
                    },
                    {
                        name: 'Live Schedule',
                        description: 'Real-time event schedule with push notifications for updates'
                    },
                    {
                        name: 'Interactive Maps',
                        description: 'Venue maps with location markers for activities and facilities'
                    },
                    {
                        name: 'Social Feed',
                        description: 'Share photos and experiences with colleagues during the event'
                    }
                ]
            },
            {
                title: 'Event Success',
                content: 'The app was used by 95% of attendees, facilitating over 1,200 registrations across various activities. Real-time updates kept everyone informed, and the social features generated tremendous engagement and memorable moments.'
            }
        ]
    },
    'frontdesk': {
        title: 'Frontdesk Application for AKAI/AKIC in Odoo',
        subtitle: 'Modern visitor and access management system',
        sections: [
            {
                title: 'Overview',
                content: 'The Frontdesk Application revolutionizes visitor management at our AKAI and AKIC facilities. This comprehensive system handles visitor registration, badge printing, host notifications, and access control, ensuring security while providing a professional visitor experience.'
            },
            {
                title: 'Key Features',
                features: [
                    {
                        name: 'Pre-Registration',
                        description: 'Hosts can pre-register visitors for expedited check-in'
                    },
                    {
                        name: 'Badge Printing',
                        description: 'Automated visitor badge generation with photos and QR codes'
                    },
                    {
                        name: 'Host Notifications',
                        description: 'Instant alerts to hosts when visitors arrive'
                    },
                    {
                        name: 'Compliance Tracking',
                        description: 'Safety briefings, NDA signatures, and evacuation lists'
                    }
                ]
            },
            {
                title: 'Business Impact',
                content: 'The system has reduced visitor check-in time by 75%, improved security compliance, and created a more professional first impression. Reception staff report 60% less administrative burden, allowing them to focus on hospitality and support.'
            }
        ]
    },
    'interactive-screen': {
        title: 'Interactive Screen for Exhibitions',
        subtitle: 'Dynamic information displays for common areas',
        sections: [
            {
                title: 'Overview',
                content: 'The Interactive Screen solution transforms ordinary displays into engaging information hubs. Deployed in office lobbies and exhibition spaces, these screens showcase real-time company metrics, announcements, news, and motivational content in an eye-catching format.'
            },
            {
                title: 'Key Features',
                features: [
                    {
                        name: 'Live Data Integration',
                        description: 'Real-time display of sales metrics, production data, and KPIs'
                    },
                    {
                        name: 'Content Management',
                        description: 'Easy-to-use system for scheduling and managing displayed content'
                    },
                    {
                        name: 'Multi-Zone Layouts',
                        description: 'Simultaneous display of different content types in organized zones'
                    },
                    {
                        name: 'Touch Interaction',
                        description: 'Interactive elements allowing users to explore information'
                    }
                ]
            },
            {
                title: 'Results',
                content: 'The screens have become focal points in our facilities, keeping employees informed and motivated. Surveys show 90% of employees regularly view the screens, and the displays have significantly improved awareness of company performance and news.'
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
                title: 'Key Features',
                features: [
                    {
                        name: 'Responsive Design',
                        description: 'Optimal viewing experience across all devices and screen sizes'
                    },
                    {
                        name: 'Product Showcase',
                        description: 'Comprehensive product catalog with specifications and applications'
                    },
                    {
                        name: 'Contact Integration',
                        description: 'Inquiry forms connected to CRM for prompt follow-up'
                    },
                    {
                        name: 'SEO Optimization',
                        description: 'Search engine optimization for better online visibility'
                    }
                ]
            },
            {
                title: 'Business Impact',
                content: 'Since launch, the website has generated 40% more qualified leads, reduced customer inquiry response time by 50%, and significantly enhanced our professional image in the market.'
            }
        ]
    },
    'project-mgmt': {
        title: 'Project Management for SBU Team in Odoo',
        subtitle: 'Comprehensive project tracking and collaboration',
        sections: [
            {
                title: 'Overview',
                content: 'The Project Management system empowers SBU teams to plan, execute, and track projects with unprecedented visibility and control. From initial planning through completion, every aspect of project delivery is managed efficiently in one integrated Odoo platform.'
            },
            {
                title: 'Key Features',
                features: [
                    {
                        name: 'Task Management',
                        description: 'Hierarchical task structures with dependencies and assignments'
                    },
                    {
                        name: 'Resource Planning',
                        description: 'Resource allocation, workload balancing, and capacity planning'
                    },
                    {
                        name: 'Time Tracking',
                        description: 'Built-in timesheet functionality with project cost tracking'
                    },
                    {
                        name: 'Collaboration Tools',
                        description: 'Integrated communication, file sharing, and status updates'
                    }
                ]
            },
            {
                title: 'Results',
                content: 'Project teams report 45% improvement in on-time delivery, 35% better resource utilization, and significantly enhanced visibility into project health and risks. Management appreciates the real-time dashboard views of all active projects.'
            }
        ]
    },
    'doc-mgmt': {
        title: 'Product Document Management for SBU 2 in Odoo',
        subtitle: 'Centralized documentation with version control',
        sections: [
            {
                title: 'Overview',
                content: 'The Product Document Management system provides SBU 2 with a centralized repository for all product-related documentation. With robust version control, access management, and powerful search capabilities, teams can find and share information effortlessly.'
            },
            {
                title: 'Key Features',
                features: [
                    {
                        name: 'Version Control',
                        description: 'Automatic versioning with complete revision history and rollback'
                    },
                    {
                        name: 'Access Management',
                        description: 'Granular permissions controlling who can view, edit, and approve'
                    },
                    {
                        name: 'Advanced Search',
                        description: 'Full-text search with filters for quick document discovery'
                    },
                    {
                        name: 'Workflow Automation',
                        description: 'Automated document approval and notification workflows'
                    }
                ]
            },
            {
                title: 'Business Impact',
                content: 'Document retrieval time has decreased by 80%, version confusion has been eliminated, and audit compliance has improved significantly. Teams collaborate more effectively with confidence they\'re working from current documents.'
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
                title: 'Key Features',
                features: [
                    {
                        name: 'Role-Based Dashboards',
                        description: 'Customized views showing relevant KPIs for each user role'
                    },
                    {
                        name: 'Interactive Visualizations',
                        description: 'Drill-down capabilities for exploring data in detail'
                    },
                    {
                        name: 'Automated Reports',
                        description: 'Scheduled report generation and distribution via email'
                    },
                    {
                        name: 'Mobile Access',
                        description: 'Access dashboards and reports from any device, anywhere'
                    }
                ]
            },
            {
                title: 'Results',
                content: 'Decision-making speed has improved by 50%, report preparation time reduced by 90%, and executives have gained unprecedented visibility into real-time business performance. Data-driven decision making has become the norm across the organization.'
            }
        ]
    },
    'field-service': {
        title: 'Field Service in Odoo',
        subtitle: 'Mobile solution for service operations excellence (Yet to launch)',
        sections: [
            {
                title: 'Overview',
                content: 'The upcoming Field Service system (yet to launch) will revolutionize how we manage field service operations. From intelligent scheduling to mobile work orders and GPS tracking, this comprehensive solution will optimize every aspect of field service delivery.'
            },
            {
                title: 'Planned Features',
                features: [
                    {
                        name: 'Smart Scheduling',
                        description: 'AI-powered scheduling considering skills, location, and priorities'
                    },
                    {
                        name: 'Mobile App',
                        description: 'Complete work order management on mobile devices offline and online'
                    },
                    {
                        name: 'GPS Tracking',
                        description: 'Real-time technician location and route optimization'
                    },
                    {
                        name: 'Inventory Management',
                        description: 'Van stock tracking and automated parts ordering'
                    }
                ]
            },
            {
                title: 'Expected Benefits',
                content: 'We anticipate 30% more service calls per technician per day, 25% reduction in travel time, 50% faster invoicing, and significantly improved first-time fix rates through better preparation and information access.'
            }
        ]
    },
    'recruitment': {
        title: 'Recruitment in Odoo',
        subtitle: 'Streamlined hiring from posting to onboarding (Yet to launch)',
        sections: [
            {
                title: 'Overview',
                content: 'The Recruitment system (yet to launch) will transform our hiring process with an integrated Odoo system managing everything from job posting through candidate onboarding. Automated workflows, AI-assisted screening, and collaborative evaluation will make hiring faster and more effective.'
            },
            {
                title: 'Planned Features',
                features: [
                    {
                        name: 'Multi-Channel Posting',
                        description: 'Publish jobs to multiple job boards and social media simultaneously'
                    },
                    {
                        name: 'AI Resume Screening',
                        description: 'Automated initial screening matching candidates to requirements'
                    },
                    {
                        name: 'Interview Scheduling',
                        description: 'Automated calendar coordination and reminder system'
                    },
                    {
                        name: 'Collaborative Evaluation',
                        description: 'Structured feedback collection from all interviewers'
                    }
                ]
            },
            {
                title: 'Expected Impact',
                content: 'We expect to reduce time-to-hire by 40%, improve candidate quality through better screening, enhance candidate experience with faster communication, and provide management with better hiring analytics and predictions.'
            }
        ]
    },
    'elearning': {
        title: 'Odoo eLearning',
        subtitle: 'Comprehensive online training and development (Not yet launched)',
        sections: [
            {
                title: 'Overview',
                content: 'The eLearning Platform (not yet launched) will provide employees with flexible, engaging online training opportunities. Supporting various learning formats, tracking progress, and managing certifications, this system will foster continuous learning and skill development across the organization.'
            },
            {
                title: 'Planned Features',
                features: [
                    {
                        name: 'Course Creation Tools',
                        description: 'Intuitive course builder supporting multiple content types'
                    },
                    {
                        name: 'Progress Tracking',
                        description: 'Comprehensive tracking of learner progress and course completion'
                    },
                    {
                        name: 'Assessments & Quizzes',
                        description: 'Create evaluations with automatic grading and feedback'
                    },
                    {
                        name: 'Certification Management',
                        description: 'Track and manage employee certifications and training records'
                    }
                ]
            },
            {
                title: 'Expected Impact',
                content: 'We expect to increase training accessibility by 90%, reduce onboarding time by 40%, improve employee engagement and retention through continuous learning opportunities, and provide better tracking of skill development across the organization.'
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
        project.sections.forEach(section => {
            html += `
                <div class="detail-section">
                    <h3>${section.title}</h3>
            `;
            
            if (section.content) {
                html += `<p>${section.content}</p>`;
            }
            
            if (section.features) {
                html += `<div class="feature-list">`;
                section.features.forEach(feature => {
                    html += `
                        <div class="feature-item">
                            <h4>${feature.name}</h4>
                            <p>${feature.description}</p>
                        </div>
                    `;
                });
                html += `</div>`;
            }
            
            html += `</div>`;
        });
        
        html += `</div>`;
        
        detailPage.innerHTML = html;
        
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

// Handle window resize for matrix canvas
window.addEventListener('resize', () => {
    const canvas = document.getElementById('matrixCanvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});